# Kriptográfiai Eszköztár (Cipher Toolbox)

Könnyűsúlyú, böngészőben futó interaktív webalkalmazás klasszikus és blokkalapú rejtjelező (titkosító) algoritmusok tesztelésére, paraméterezésére és visszafejtésére.

🌐 **Élő demó:** [cipher.bencedaniel.hu](https://cipher.bencedaniel.hu)

---

## Támogatott algoritmusok

1. **Caesar-rejtjel (`caesarEncrypt` / `caesarDecrypt`)**
   * Karaktereltolásos titkosítás tetszőleges `shift` értékkel.
   * Opcionális alulvonás (`_`) támogatás az ABC-ben (a bemenetben szereplő `_` karakter esetén automatikusan aktiválódik).
2. **Csoportos helyettesítés (`groupReplaceEncrypt` / `groupReplaceDecrypt`)**
   * Mátrixalapú helyettesítő rejtjel testreszabható karaktertáblával, valamint egyedi sor- és oszlopcímkékkel.
3. **Vigenère-rejtjel (`viginereEncryption`)**
   * Polialfabetikus helyettesítés tetszőleges kulcsszóval és testreszabható ABC-készlettel.
4. **Shannon keverő titkosítás (`shannonKeveroTitkositas`)**
   * Konfúziós és diffúziós lépéseken alapuló blokktitkosítás: állítható elő- és utó-permutációval, eltolással, ciklusszámmal és kitöltő karakterrel (*spacer*).

---

## Projekt felépítése

```text
├── index.html   # Felhasználói felület, stílusok és eseménykezelés
├── ciphers.js   # ES modul a tiszta titkosító és visszafejtő algoritmusokkal
└── README.md    # Dokumentáció