import { pool as db } from '../db.js';

//GET ALL HOUSES 
export async function getAllHouses(){
    const result = await db.query('SELECT * from houses'); 
    return result.rows; 
}
//GET HOUSE BY ID 
export async function getHouseById(id) {
    const result = await db.query('SELECT * FROM houses WHERE house_id = $1;', [id]);
    return result.rows[0];
}


