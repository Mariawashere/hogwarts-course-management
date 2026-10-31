import { pool as db } from '../db.js';

//GET ALL STUDENTS 
export async function getAllStudents(){
    const result = await db.query('SELECT * FROM students'); 
    
    
    return result.rows; 
}


// Ny funktion til at oprette en elev
export async function createStudent(firstName, lastName, yearGroup, houseId) {
    const query = `
        INSERT INTO students (first_name, last_name, year_group, house_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const values = [firstName, lastName, yearGroup, houseId];
    const result = await db.query(query, values);
    return result.rows[0];
}

export async function getStudentById(id) {
    const result = await db.query('SELECT * FROM students WHERE student_id = $1', [id]);
    return result.rows[0]; // Returnerer den første elev (eller undefined hvis ikke fundet)
}

// OPDATER ELEV 
export async function updateStudent(id, firstName, lastName, yearGroup, houseId) {
    const query = `
        UPDATE students 
        SET first_name = $1, last_name = $2, year_group = $3, house_id = $4
        WHERE student_id = $5
        RETURNING *;
    `;
    const values = [firstName, lastName, yearGroup, houseId, id];
    const result = await db.query(query, values);
    return result.rows[0];
}

//SLET EN ELEV 
export async function deleteStudent(id) {
    const result = await db.query('DELETE FROM students WHERE student_id = $1 RETURNING *;', [id]);
    return result.rows[0]; // Returnerer den slettede elev 
}