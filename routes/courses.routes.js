import express from 'express';
import { 
    getCourses, 
    getCourseByIdHandler, 
    createCourseHandler, 
    updateCourseHandler, 
    deleteCourseHandler 
} from '../controllers/courses.controller.js';

const router = express.Router();

// GET /courses – Hent alle courses
router.get('/', getCourses);

// GET /courses/:id – Hent et specifikt kursus via id
router.get('/:id', getCourseByIdHandler);

// POST /courses – Opret et nyt kursus
router.post('/', createCourseHandler);

// PUT /courses/:id – Opdater et eksisterende kursus
router.put('/:id', updateCourseHandler);

// DELETE /courses/:id – Slet et kursus
router.delete('/:id', deleteCourseHandler);

export default router;