import express from 'express';

import { getTeachers, getTeacherByIdHandler, createTeacherHandler, updateTeacherHandler, deleteTeacherHandler } from '../controllers/teachers.controller.js';

const router = express.Router();

// GET /teachers – Hent alle teachers
router.get('/', getTeachers);

// GET /teachers/:id – Hent specifik teacher
router.get('/:id', getTeacherByIdHandler);

// POST /teachers – Opret en ny teacher
router.post('/', createTeacherHandler);

// PUT /teachers/:id – Opdater en teacher
router.put('/:id', updateTeacherHandler);

// DELETE /teachers/:id – Slet en teacher
router.delete('/:id', deleteTeacherHandler);

export default router;