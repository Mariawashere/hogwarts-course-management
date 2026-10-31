# Pseudokode for Hogwarts Course Management System

Dette dokument beskriver logikken for projektets API-endpoints fordelt på standardmønstre for HTTP-metoder.

---

## 1. GET Mønstre (Hent data)

### GET /houses, /teachers, /students, /courses (Hent alle)
1. MODTAG forespørgsel fra klienten.
2. UDFØR SQL-forespørgsel: `SELECT * FROM [tabel]` (evt. med JOIN til relaterede tabeller).
3. HVIS databasen fejler, RETURNER status 500 med fejlmeddelelse.
4. ELLERS, RETURNER status 200 med dataen i JSON-format.

### GET /:id (Hent specifik ud fra ID)
*Følger samme mønster som ovenfor, men med SQL-filter:* `WHERE id = [modtaget_id]`.
- HVIS rækken ikke findes, RETURNER status 404 (Not Found).
- ELLERS, RETURNER status 200 med elementet.

---

## 2. POST Mønster (Opret ny, f.eks. /teachers, /students)
1. MODTAG data fra request body (`req.body`).
2. VALIDER at påkrævede felter er udfyldt korrekt (f.eks. tjek at `year_group` er mellem 1-7 for elever).
3. HVIS validering fejler, RETURNER status 400 (Bad Request).
4. UDFØR SQL-forespørgsel: `INSERT INTO [tabel] (...) VALUES (...) RETURNING *`.
5. RETURNER status 201 (Created) med det nyskabte element.

---

## 3. PUT Mønster (Opdater, f.eks. /teachers/:id, /courses/:id)
1. MODTAG `id` fra URL og nye data fra request body.
2. UDFØR SQL-forespørgsel: `UPDATE [tabel] SET ... WHERE id = [id]`.
3. Tjek om elementet eksisterede. HVIS ikke, RETURNER status 404.
4. ELLERS, RETURNER status 200 med det opdaterede element.

---

## 4. DELETE Mønster (Slet, f.eks. /students/:id, /courses/:id)
1. MODTAG `id` fra URL-parametrene.
2. UDFØR SQL-forespørgsel: `DELETE FROM [tabel] WHERE id = [id]`.
3. Tjek om en række faktisk blev slettet. HVIS ikke, RETURNER status 404.
4. ELLERS, RETURNER status 200 (eller 204) med en bekræftelse på sletningen.