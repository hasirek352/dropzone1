# DROPZONE ONLINE v23 — instrukcja

To jest **wersja demonstracyjna**, wyłącznie z wirtualnymi PLN. Zawiera stronę HTML, serwer Node.js z WebSocket i bazę prawdopodobieństw dla 78 skrzynek.

## Szybki test na komputerze
1. Zainstaluj Node.js 20 lub nowszy: https://nodejs.org/
2. Rozpakuj ZIP do folderu.
3. Otwórz terminal w tym folderze, wpisz `npm install`, a następnie `npm start`.
4. Otwórz `http://localhost:3000`. W drugiej karcie lub przeglądarce możesz przetestować drugiego gracza.

## Gra z kolegą przez internet
1. Wgraj **cały folder projektu** do repozytorium GitHub (pliki `index.html`, `server.js`, `cases.json`, `package.json`).
2. W https://render.com utwórz **New → Web Service**, połącz repozytorium GitHub.
3. Ustaw **Build Command:** `npm install` i **Start Command:** `npm start`. Środowisko: **Node**. Wybierz dostępny plan (darmowy, jeśli jest oferowany).
4. Poczekaj na adres `https://...onrender.com`, otwórz go, wejdź w Case Battle → sekcja ONLINE, utwórz pokój, skopiuj link i wyślij na Discordzie.
5. Kolega otwiera link i automatycznie dołącza do pokoju. Wybiera slot, a gospodarz rozpoczyna bitwę.

**Ważne:** sam Netlify Drop nie uruchomi serwera `server.js`. Potrzebujesz hostingu obsługującego Node.js i WebSocket (np. Render). Na darmowych planach serwer może zasypiać.

## Obecne ograniczenia
- Losowania i wyniki bitew online są wyznaczane na serwerze, a wszyscy oglądają te same wyniki. Serwer używa losowania kryptograficznego.
- **Saldo i ekwipunek nadal są zapisane lokalnie w przeglądarce**. Nie ma logowania, wspólnej bazy kont, zabezpieczenia przed edycją salda ani trwałych pokoi po restarcie serwera. To demo dla znajomych, **nie** bezpieczna platforma do prawdziwych nagród, handlu ani płatności.
- Online obecnie pozwala wybrać jedną skrzynię na wszystkie rundy (lokalny tryb nadal obsługuje mieszane skrzynie). Pokoje online nie odtwarzają się po rozłączeniu.
- Po zakończeniu bitwy należy opuścić pokój, aby stworzyć nowy.
