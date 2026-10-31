import { getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent } from '../repositories/students.repository.js';

export async function getStudents(req, res) {
    try {
        const students = await getAllStudents();
        res.status(200).json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente students fra databasen' });
    }
}

export async function createStudentHandler(req, res) {
    const { first_name, last_name, year_group, house_id } = req.body;

    try {
        const newStudent = await createStudent(first_name, last_name, year_group, house_id);
        res.status(201).json(newStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke oprette studerende i databasen' });
    }
}

export async function getStudentByIdHandler(req, res) {
    const studentId = req.params.id;

    try {
        const student = await getStudentById(studentId);
        
        if (!student) {
            return res.status(404).json({ error: 'Elev ikke fundet' });
        }

        res.status(200).json(student);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente elev fra databasen' });
    }
}


export async function updateStudentHandler(req, res) {
    const studentId = req.params.id;
    const { first_name, last_name, year_group, house_id } = req.body;

    try {
        const updatedStudent = await updateStudent(studentId, first_name, last_name, year_group, house_id);

        if (!updatedStudent) {
            return res.status(404).json({ error: 'Elev ikke fundet' });
        }

        res.status(200).json(updatedStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke opdatere eleven' });
    }
}

export async function deleteStudentHandler(req, res) {
    const studentId = req.params.id;

    try {
        const deletedStudent = await deleteStudent(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ error: 'Elev ikke fundet' });
        }

        // 200 OK eller 204 No Content er standard ved sletning. 
        // 200 med et lille svar er rart for at se hvad der blev slettet:
        res.status(200).json({ message: 'Elev slettet med succes', student: deletedStudent });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke slette eleven' });
    }
}