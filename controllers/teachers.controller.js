import { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher } from '../repositories/teachers.repository.js';

// hent alle teachers
export async function getTeachers(req, res) {
    try {
        const teachers = await getAllTeachers();
        res.status(200).json(teachers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente teachers fra databasen' });
    }
}

// get teacher by id 
export async function getTeacherByIdHandler(req, res) {
    try {
        const teacher = await getTeacherById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ error: 'Lærer ikke fundet' });
        }
        res.status(200).json(teacher);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente lærer' });
    }
}

// create teacher 
export async function createTeacherHandler(req, res) {
    const { first_name, last_name, house_id } = req.body;
    try {
        const newTeacher = await createTeacher(first_name, last_name, house_id);
        res.status(201).json(newTeacher);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke oprette lærer' });
    }
}

// update teacher 
export async function updateTeacherHandler(req, res) {
    const { first_name, last_name, house_id } = req.body;
    try {
        const updatedTeacher = await updateTeacher(req.params.id, first_name, last_name, house_id);
        if (!updatedTeacher) {
            return res.status(404).json({ error: 'Lærer ikke fundet' });
        }
        res.status(200).json(updatedTeacher);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke opdatere lærer' });
    }
}

// delete teacher 
export async function deleteTeacherHandler(req, res) {
    try {
        const deletedTeacher = await deleteTeacher(req.params.id);
        if (!deletedTeacher) {
            return res.status(404).json({ error: 'Lærer ikke fundet' });
        }
        res.status(200).json({ message: 'Lærer slettet med succes', teacher: deletedTeacher });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke slette lærer' });
    }
}