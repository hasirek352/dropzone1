# DROPZONE v53 — 18 skrzynek i grafiki

Gotowy komplet plików do wgrania do repozytorium GitHub `hasirek352/dropzone1`.

## Co jest w paczce
- Dotychczasowe pięć skrzynek HIGH ROLLER, BUTTERFLY, SPORT, PANDORA, LORE.
- 13 nowych: PREMIUM KNIVES, ARROW, EMERALD, GLOVES, GEMSTONE CASE, PORCELAIN CASE, EMERALD CASE, ROYAL, HOWL, SHATTERED, AMETHYST, BLACK PEARL, SCARLET.
- 13 różnych nowych grafik, pliki `assets/case-84.webp` do `assets/case-96.webp`, plus pięć dotychczasowych.
- Każda skrzynka ma własną pulę skinów, ceny i szanse sumujące się do 100%.
- Case Battle lokalne i online obsługują skrzynki o ID 0–17. Ekwipunek zachowuje stare ID.
- Miniatury samych skinów są pobierane z ByMykel/CSGO-API po uruchomieniu strony, a nie są pakowane w ZIP. Dostęp zależy od zewnętrznego źródła.
- Projekt korzysta wyłącznie z wirtualnych PLN (bez realnych wpłat).

## Uwaga dotycząca cen i dropów
Źródła: publiczne strony KeyDrop (screeny użytkownika) i CSGO-SKINS (dane przeglądane 2026-10-11).
Ceny czterech skrzynek KeyDrop pochodzą ze screenów. W sześciu skrzynkach CSGO-SKINS stosujemy ceny PLN uzgodnione w rozmowie. Ceny GEMSTONE CASE, PORCELAIN CASE i EMERALD CASE przeliczono z kwot EUR widocznych w trakcie przygotowania (kurs roboczy 4,3861 PLN/EUR).
Wartości skinów z CSGO-SKINS przeliczono z EUR do wirtualnych PLN. Niektóre pule mają uproszczoną wersję stanów/StatTrak oraz znormalizowane wagi, więc nie należy traktować ich jako dokładnej kopii procentów i wartości z serwisów źródłowych.
Grafiki okładek są oryginalnymi ilustracjami inspirowanymi tematami, a nie zdjęciami z KeyDrop.

## Instalacja
Wgraj wszystkie pliki i folder `assets` do korzenia repozytorium. Zachowaj strukturę folderów. Render powinien wdrożyć po zatwierdzeniu. Odśwież Ctrl+F5. Nie usuwaj ekwipunku z pamięci przeglądarki.

## Test po wdrożeniu
1. `/health` odpowiada `ok`.
2. Katalog pokazuje 18 skrzynek.
3. PREMIUM KNIVES / EMERALD CASE mają osobne okładki i listy skinów.
4. W Case Battle dodanie skrzynki `SCARLET` zwiększa licznik rund i koszt, a bitwa startuje.
5. Suma szans dropów to 100% dla każdej skrzynki.
