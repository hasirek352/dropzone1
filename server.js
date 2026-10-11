'use strict';
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {WebSocketServer,WebSocket}=require('ws');
const cases=require('./cases.json');
const rooms=new Map();
const PORT=Number(process.env.PORT||3000);
const server=http.createServer((req,res)=>{
 if(/^\/assets\/[a-z0-9-]+\.webp$/.test(req.url)){const f=path.join(__dirname,req.url);return fs.stat(f,(err,st)=>{if(err||!st.isFile()){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':'image/webp','Cache-Control':'public, max-age=86400','Content-Length':st.size});fs.createReadStream(f).pipe(res)})}
 if(req.url==='/health'){res.writeHead(200,{'Content-Type':'text/plain'});return res.end('ok')}
 if(req.url==='/'||req.url.startsWith('/?')){res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});return fs.createReadStream(path.join(__dirname,'index.html')).pipe(res)}
 res.writeHead(404);res.end('Not found');
});
const wss=new WebSocketServer({server,path:'/ws',maxPayload:2048});
const send=(ws,obj)=>{if(ws?.readyState===WebSocket.OPEN)ws.send(JSON.stringify(obj))};
const error=(ws,message)=>send(ws,{type:'error',message});
const view=r=>({code:r.code,owner:r.owner,mode:r.mode,ffa:r.ffa,caseId:r.caseId,caseIds:r.caseIds,rounds:r.rounds,cost:r.cost,status:r.status,seats:r.seats.map(s=>s?{id:s.id,nick:s.nick,bot:s.bot}:null)});
const broadcast=(r,obj)=>{for(const s of r.seats)if(s&&!s.bot)send(s.ws,obj)};
const publish=r=>broadcast(r,{type:'room',room:view(r)});
const roomOf=ws=>[...rooms.values()].find(r=>r.seats.some(s=>s?.ws===ws));
function remove(ws){const r=roomOf(ws);if(!r)return;const i=r.seats.findIndex(s=>s?.ws===ws);if(i>=0)r.seats[i]=null;if(r.status==='waiting'){if(r.owner===ws.playerId){const other=r.seats.find(s=>s&&!s.bot);if(other)r.owner=other.id;else{rooms.delete(r.code);return}}publish(r)}else if(!r.seats.some(s=>s&&!s.bot))rooms.delete(r.code)}
function pick(c){const max=0xffffffff;const n=crypto.randomBytes(4).readUInt32BE(0)/ (max+1)*100;let r=n;for(const d of c.drops){r-=d.chance;if(r<=0)return {id:d.id,wear:d.wear,value:d.value}}const d=c.drops.at(-1);return{id:d.id,wear:d.wear,value:d.value}}
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function run(r){
 r.status='playing';r.matchId=crypto.randomUUID();broadcast(r,{type:'started'});const scores=Array(r.ffa||2).fill(0),allDrops=[];
 for(let n=1;n<=r.rounds;n++){
  const drops=r.seats.map(()=>pick(cases[r.caseIds[n-1]]));drops.forEach((d,i)=>{scores[r.ffa?i:Math.floor(i/r.mode)]+=d.value;allDrops.push(d)});
  broadcast(r,{type:'round',round:n,caseId:r.caseIds[n-1],drops,scores});await sleep(5200);
 }
 const extreme=r.rule==='underdog'?Math.min(...scores):Math.max(...scores);
 const winnerTeams=scores.map((x,i)=>x===extreme?i:-1).filter(i=>i>=0);
 const winners=winnerTeams.length===1?r.seats.map((s,i)=>r.ffa?i:Math.floor(i/r.mode)).map((t,i)=>t===winnerTeams[0]?i:-1).filter(i=>i>=0):[];
 r.status='finished';broadcast(r,{type:'finished',code:r.code,matchId:r.matchId,winners,scores,allDrops});setTimeout(()=>{if(rooms.get(r.code)===r)rooms.delete(r.code)},180000);
}
wss.on('connection',ws=>{
 ws.on('message',buf=>{let m;try{m=JSON.parse(buf.toString())}catch{return error(ws,'Nieprawidłowa wiadomość')}
  if(!m||typeof m!=='object')return;
  const id=String(m.playerId||'').slice(0,80),nick=String(m.nick||'Gracz').replace(/[<>]/g,'').slice(0,20)||'Gracz';if(!id)return error(ws,'Brak identyfikatora');ws.playerId=id;
  const r=roomOf(ws);
  if(m.type==='leave'){remove(ws);return}
  if(m.type==='create'){
   if(r)return error(ws,'Najpierw opuść obecny pokój');const mode=Number(m.mode),ffa=Number(m.ffa);
   const caseIds=Array.isArray(m.caseIds)?m.caseIds.map(Number):[];
   if(![1,2,3].includes(mode)||![0,3,4,5,6].includes(ffa)||caseIds.length<1||caseIds.length>30||caseIds.some(id=>!Number.isInteger(id)||!cases[id]))return error(ws,'Nieprawidłowe ustawienia lub skrzynki (maks. 30)');
   const code=crypto.randomBytes(4).toString('hex').toUpperCase();const cost=Math.round(caseIds.reduce((sum,id)=>sum+cases[id].price,0)*100)/100;
   const nr={code,owner:id,mode,ffa,caseId:caseIds[0],caseIds,rounds:caseIds.length,cost,status:'waiting',seats:Array(ffa||mode*2).fill(null),created:Date.now()};nr.seats[0]={id,nick,ws,bot:false};rooms.set(code,nr);publish(nr);return;
  }
  if(m.type==='join'){
   if(r)return error(ws,'Najpierw opuść obecny pokój');const target=rooms.get(String(m.code||'').toUpperCase());if(!target||target.status!=='waiting')return error(ws,'Nie znaleziono otwartego pokoju');if(target.seats.some(s=>s?.id===id))return error(ws,'Już jesteś w pokoju');const i=target.seats.findIndex(s=>!s);if(i<0)return error(ws,'Pokój jest pełny');target.seats[i]={id,nick,ws,bot:false};publish(target);return;
  }
  if(!r)return error(ws,'Najpierw dołącz do pokoju');if(r.status!=='waiting')return error(ws,'Bitwa już się rozpoczęła');
  const index=Number(m.index);if(m.type==='seat'){
   if(!Number.isInteger(index)||index<0||index>=r.seats.length||r.seats[index])return error(ws,'Slot zajęty');const old=r.seats.findIndex(s=>s?.ws===ws);if(old<0)return error(ws,'Nie jesteś w pokoju');const seat=r.seats[old];r.seats[old]=null;r.seats[index]=seat;publish(r);return;
  }
  if(m.type==='bot'){
   if(r.owner!==id)return error(ws,'Tylko gospodarz dodaje boty');if(!Number.isInteger(index)||index<0||index>=r.seats.length)return;const s=r.seats[index];if(s&&!s.bot)return error(ws,'Slot zajęty przez gracza');r.seats[index]=s?null:{id:'bot'+index,nick:'BOT '+(index+1),bot:true};publish(r);return;
  }
  if(m.type==='start'){
   if(r.owner!==id)return error(ws,'Tylko gospodarz rozpoczyna');if(r.seats.some(s=>!s))return error(ws,'Najpierw zapełnij wszystkie sloty');run(r).catch(e=>console.error('battle error',e));return;
  }
 });
 ws.on('close',()=>remove(ws));ws.on('error',()=>remove(ws));
});
setInterval(()=>{for(const [code,r] of rooms)if(Date.now()-r.created>2*60*60*1000)rooms.delete(code)},600000).unref();
server.listen(PORT,'0.0.0.0',()=>console.log('DROPZONE ONLINE on port '+PORT));
