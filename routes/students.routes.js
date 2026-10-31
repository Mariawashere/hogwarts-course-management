import express from 'express';
import { getStudents, createStudentHandler, getStudentByIdHandler, updateStudentHandler, deleteStudentHandler} from '../controllers/students.controller.js';

const router = express.Router();

// GET /students – Hent alle students
router.get('/', getStudents);

// POST /students – Opret en ny student
router.post('/', createStudentHandler);

//GET /students - Hent en studerende ud fra ID 
router.get('/:id', getStudentByIdHandler);

//PUT /students/:id - opdatere en studerende 
router.put('/:id', updateStudentHandler);

//DELETE /students/:id - slette en elev 
router.delete('/:id', deleteStudentHandler);


export default router;


