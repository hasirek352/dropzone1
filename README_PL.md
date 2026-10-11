# DROPZONE v25 ONLINE — różne skrzynki i bonus

## Co nowego
- W Case Battle Online możesz wyszukać i dodawać różne skrzynki po kolei (maksymalnie 30). Każda to osobna runda; kliknięcie pozycji na liście usuwa ją.
- Wszyscy gracze w pokoju widzą tę samą listę skrzynek, a serwer losuje dla każdej rundy z właściwej puli.
- Przycisk 🎁 +1 000 000 PLN na górze strony. Każda przeglądarka może odebrać bonus raz. Ty i kolega klikacie osobno na swoich komputerach.
- Wszystkie dotychczasowe skrzynki, stany skinów i animacje z v24 pozostają.

## Wdrożenie na Render
1. Rozpakuj ZIP.
2. W repozytorium GitHub `hasirek352/dropzone1` zastąp pliki `index.html`, `server.js`, `cases.json`, `package.json`, `README_PL.md` nowymi z paczki.
3. Zatwierdź zmiany (Commit changes). Render powinien wdrożyć nową wersję automatycznie.
4. Gdy status to Live, otwórz stronę i użyj Ctrl+F5.
5. Każdy gracz klika 🎁 +1 000 000 PLN. W Case Battle Online wybierz skrzynkę, kliknij „Dodaj skrzynkę”, powtórz dla kolejnych skrzynek i utwórz pokój.

**Uwaga:** To demo wyłącznie z wirtualnymi PLN. Saldo i ekwipunek są lokalne w przeglądarce, bez kont i zabezpieczeń przed manipulacją. Bonus jest jednorazowy na przeglądarkę, nie na osobę. Nie używać do prawdziwych pieniędzy.
\n\n## v26 — widoczne dropy i sumowanie\nW bitwie online pod rolkami jest stała tablica skinów każdego gracza z nazwą, stanem, ceną i rundą. Po zakończeniu każdej animacji wynik zostaje dodany do listy, a suma drużyny lub gracza jest aktualizowana. Poprzednie dropy pozostają widoczne w kolejnych rundach.\n
## v27 — kafelkowy wybór skrzynek i większe rolki
W Case Battle Online przycisk WYBIERZ SKRZYNKI otwiera galerię 78 skrzynek z grafikami poglądowymi skinów, wyszukiwaniem, cenami i licznikami + / −. Wybrane skrzynki można ustawić w dowolnej kolejności (kolejność dodawania). Rolki online mają większe kafelki i centralny znacznik. Wyniki i sumy z v26 pozostają. Grafiki w kafelkach są poglądowymi skinami z puli, nie oryginalnymi grafikami KeyDrop.
\n## v28 — kafelki w kolejności skrzynek\nWybrane skrzynki w kreatorze i w pokoju online są pokazane jako graficzne kafelki (obraz skina z puli, nazwa, cena, numer rundy), zamiast tekstowych przycisków. W kreatorze kafelek ma ✕ do usunięcia rundy. Grafiki są poglądowymi skinami z pul, nie oficjalnymi okładkami skrzynek.\n

## DROPZONE v29 — redesign interfejsu
- Własna ciemna stylistyka inspirowana układem KeyDrop: limonkowe akcje, kontrastowe karty i bardziej czytelne panele.
- Kafelki z obrazem skina reprezentującego skrzynkę, numerem rundy, ceną i usuwaniem w kreatorze oraz kafelki w pokoju online.
- Większe rolki animacji online, zachowane podsumowanie i historia dropów.
- Bez zmian w `cases.json`, `server.js`, `package.json`: pula 78 skrzynek, losowania serwerowe i multiplayer pozostają takie same.
- To oryginalna implementacja inspirowana stylem, a nie kopia oryginalnych grafik, kodu lub marki KeyDrop.
- Po wdrożeniu odśwież Ctrl+F5. Przetestuj tworzenie pokoju i rundy na dwóch komputerach.

## v30 — poprawka zgodności rolki z dropem
Usunięto błędne sztywne obliczanie przesunięcia rolki (164 px), które nie zgadzało się z faktycznym CSS v29 (175 px desktop / 145 px mobile). Wskaźnik jest teraz centrowany na rzeczywistym kafelku wygranej przy pomocy offsetLeft/offsetWidth, a wynik nadal pochodzi z serwera. Wygrany kafelek zostaje dodatkowo podświetlony po zakończeniu animacji.

## v31 — nowe kafelki skrzynek
Odświeżony wygląd kafelków w katalogu, wyborze do bitwy i kolejności rund. Ciemny grafit, limonkowe akcenty, większe grafiki skinów, czytelne ceny i przyciski ilości. Grafiki nadal przedstawiają skiny z danej skrzynki (tym razem reprezentatywny cenny skin), nie oryginalne okładki KeyDrop. Bez zmian logiki serwera, pul i procentów.

## v32 — poprawka wskaźnika losowania
W v31 animacja online nadal zawierała stałą szerokość kafelka 164px, podczas gdy CSS używał 175px / 145px. Naprawiono bezpośrednio w aktualnym kodzie: pozycja zatrzymania obliczana jest z offsetLeft i offsetWidth wygranego kafelka. Analogiczną poprawkę zastosowano w lokalnych rolkach. Wylosowane wyniki i szanse pozostają bez zmian.

## v33 — skrzynki i losowanie
Nowe autorskie okładki skrzynek (wektorowe kufry, indywidualne akcenty i numery), zamiast tego samego AWP na większości skrzynek. Online Case Battle ma nowy ekran ujawniania: podczas otwierania widać animowany kufer, po 3,2 s pokazuje się dokładny wynik przesłany przez serwer. Usunięto mylącą rolkę online, której zielony znacznik wskazywał inny przedmiot. Szanse i dane skrzynek oraz serwer pozostają bez zmian.


## v35: 78 okładek i Emerald Empire
- Każda z 78 skrzynek ma osobną kompozycję WebP `assets/case-00.webp` do `case-77.webp`. Grafiki powstały z 24 ilustracji bazowych z indywidualnymi motywami, kolorami, nazwami i detalami; nie są to 78 niezależnych renderów 3D.
- Emerald Empire oraz Emerald Gate zawierają wyłącznie 12 typów noży Gamma Doppler Emerald, po pięć stanów zużycia. Szanse sumują się do 100%.
- Są to ceny i skiny demonstracyjne; wartości są orientacyjne, nie odzwierciedlają rynku.
- Serwer udostępnia statyczne obrazy `/assets/case-XX.webp`; bez folderu assets okładki nie będą działały.
- Podmień wszystkie pliki i folder `assets` na GitHubie.
