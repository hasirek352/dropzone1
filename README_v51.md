# DROPZONE v51 — pięć skrzynek i katalog skinów CS2

- Zachowano wyłącznie pięć okładek: `assets/case-79.webp` do `assets/case-83.webp`.
- Usunięto wszystkie pozostałe grafiki skrzynek, nieużywane ilustracje oraz 12 sztucznych grafik Emerald SVG (łącznie 115 plików).
- Własne grafiki poszczególnych skinów z uproszczonych SVG zostały wyłączone. Obrazy skinów pobiera przeglądarka z publicznego API ByMykel/CSGO-API i jego odnośników do assetów Counter-Strike.
- Dodano pełny, wyszukiwalny katalog skinów i noży CS2 (stronicowanie po 48), kategorię rękawic oraz naklejek.
- Doppler i Gamma Doppler są dopasowywane po fazach (Phase 1–4, Ruby, Sapphire, Black Pearl, Emerald), żeby nie pokazywać losowo niewłaściwego skina.
- Jeśli zewnętrzne źródło nie działa lub brakuje grafiki danego wariantu, pojawi się uczciwy komunikat „BRAK GRAFIKI CS2”, a nie wymyślony obrazek.
- Stare ekwipunki, ceny, szanse, skrzynki i Case Battle zachowują dotychczasowe działanie.

Ważne: pełny katalog jest dostępny DO PRZEGLĄDANIA i planowania nowych skrzynek. Nie oznacza to, że każda pozycja katalogu jest już przedmiotem do wylosowania. Dropy pozostają ograniczone do pul pięciu skrzynek. Grafiki w katalogu i dropach wymagają internetu oraz dostępności zewnętrznych źródeł; nie wszystkie pliki skinów znajdują się w paczce ZIP. Ceny skinów w DROPZONE pozostają umownymi cenami DEMO, a nie cenami z rynku CS2.

Źródło katalogu: https://github.com/ByMykel/CSGO-API

Aktualizacja: wgraj `index.html`, `cases.json`, `server.js` oraz katalog `assets` z tej paczki. Aby fizycznie usunąć stare grafiki z GitHuba, trzeba też usunąć stare pliki z repozytorium; sam upload nowej paczki ich nie usuwa.
