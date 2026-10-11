# DROPZONE v52 — poprawka fikcyjnych Emeraldów

- Usunięto Talon Knife | Gamma Doppler Emerald i Navaja Knife | Gamma Doppler Emerald z listy modeli Emerald przeznaczonych do losowania. Tych skinów nie ma w rzeczywistym CS2.
- Stare ID 85 i 93 pozostają dla kompatybilności z zapisanym wcześniej ekwipunkiem. Jeśli użytkownik je posiadał, zobaczy informację „NIE ISTNIEJE W CS2” zamiast fikcyjnego obrazka; nadal może je sprzedać w wirtualnym ekwipunku.
- W 5 aktywnych skrzynkach naprawiono stan 6 dropów Emerald z FT na FN; ich umowne ceny i procenty pozostają niezmienione.
- **Kluczowa naprawa:** strona nie nadpisuje już ręcznie ustalonych pul dropów losową zawartością ze starej bazy. Case Battle i zwykłe otwieranie korzystają z tych samych pięciu zdefiniowanych pul.
- Dane `cases.json` i `index.html` są zsynchronizowane. Nadal jest pięć skrzynek.
- Prawdziwe miniatury są nadal pobierane z publicznego API ByMykel, zatem wymagają dostępu do internetu. Nie wszystkie są dołączone do ZIP.

**Wgrywanie**: podmień `index.html` i `cases.json`. `server.js`, `package.json` i pięć okładek w `assets` pozostają niezmienione.

Weryfikacja: składnia JS oraz sumy szans zostały sprawdzone. Pełny test w Render nie został wykonany.
