import { pool as db } from '../db.js';

//GET ALL COURSES 
export async function getAllCourses(){
    const result = await db.query('SELECT * from courses'); 
    return result.rows; 
}

// Henter courses by id 
export async function getCourseById(id) {
    const result = await db.query('SELECT * FROM courses WHERE course_id = $1;', [id]);
    return result.rows[0];
}

export async function createCourse(course_name, teacher_id) {
    const result = await db.query(
        'INSERT INTO courses (course_name, teacher_id) VALUES ($1, $2) RETURNING *',
        [course_name, teacher_id]
    );
    return result.rows[0];
}

//Opdaterer valgt course 
export async function updateCourse(id, course_name, description, teacher_id) {
    const result = await db.query(
        'UPDATE courses SET course_name = $1, description = $2, teacher_id = $3 WHERE course_id = $4 RETURNING *;',
        [course_name, description, teacher_id, id]
    );
    return result.rows[0];
}

//Sletter en course 
export async function deleteCourse(id) {
    const result = await db.query('DELETE FROM courses WHERE course_id = $1 RETURNING *;', [id]);
    return result.rows[0];
}

