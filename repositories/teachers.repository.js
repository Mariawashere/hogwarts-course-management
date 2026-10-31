import { pool as db } from '../db.js';

//GET ALL TEACHERS
export async function getAllTeachers(){
    const result = await db.query('SELECT * FROM teachers'); 
    
    return result.rows; 
}

//Get teachear by id 
export async function getTeacherById(id) {
    const result = await db.query('SELECT * FROM teachers WHERE teacher_id = $1;', [id]);
    return result.rows[0];
}

//create new teacher 
export async function createTeacher(firstName, lastName, houseId) {
    const query = `
        INSERT INTO teachers (first_name, last_name, house_id) 
        VALUES ($1, $2, $3) 
        RETURNING *;
    `;
    const values = [firstName, lastName, houseId];
    const result = await db.query(query, values);
    return result.rows[0];
}

//update teacher 
export async function updateTeacher(id, firstName, lastName, houseId) {
    const query = `
        UPDATE teachers 
        SET first_name = $1, last_name = $2, house_id = $3
        WHERE teacher_id = $4
        RETURNING *;
    `;
    const values = [firstName, lastName, houseId, id];
    const result = await db.query(query, values);
    return result.rows[0];
}

//delete teacher 
export async function deleteTeacher(id) {
    const result = await db.query('DELETE FROM teachers WHERE teacher_id = $1 RETURNING *;', [id]);
    return result.rows[0];
}