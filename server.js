import 'dotenv/config';
import express from 'express';
import houseRoutes from './routes/houses.routes.js';
import studentsRoutes from './routes/students.routes.js'; 
import teachersRoutes from './routes/teachers.routes.js';
import coursesRoutes from './routes/courses.routes.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


// Forbind  houses-ruter til serveren
app.use('/houses', houseRoutes);
// Forbind  students-ruter til serveren
app.use('/students', studentsRoutes);
//Forbind  teacher-ruter til serveren 
app.use('/teachers', teachersRoutes); 
//Forbind  courses-ruter til serveren 
app.use('/courses', coursesRoutes); 

app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});







