import * as courseRepository from '../repositories/courses.repository.js';


// Hent alle courses
export async function getCourses(req, res) {
    try {
        const courses = await courseRepository.getAllCourses();
        res.status(200).json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente courses fra databasen' });
    }
}

// Henter courser by id 
export async function getCourseByIdHandler(req, res) {
    try {
    const course = await courseRepository.getCourseById(req.params.id);
        if (!course) {
            return res.status(404).json({ error: 'Kursus ikke fundet' });
        }
        res.status(200).json(course);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente kursus' });
    }
}

// Opretter en ny course
export async function createCourseHandler(req, res) {
    const { course_name, teacher_id } = req.body;
    try {
        const newCourse = await courseRepository.createCourse(course_name, teacher_id);
        res.status(201).json(newCourse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke oprette kursus' });
    }
}

//Opdater en course 
export async function updateCourseHandler(req, res) {
    const { course_name, description, teacher_id } = req.body;
    try {
        const updatedCourse = await updateCourse(req.params.id, course_name, description, teacher_id);
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course ikke fundet' }); //returner fejl hvis ikke fundet course
        }
        res.status(200).json(updatedCourse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke opdatere course' }); // returner en response at database ikke kunne opdatete givne course
    }
}

//Sletter en valgt course 
export async function deleteCourseHandler(req, res) {
    try {
        const deletedCourse = await deleteCourse(req.params.id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Kursus ikke fundet' }); 
        }
        res.status(200).json({ message: 'Kursus slettet med succes', course: deletedCourse });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke slette kursus' });
    }
}