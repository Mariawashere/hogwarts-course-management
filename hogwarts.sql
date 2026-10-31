-- Slet tabeller hvis de eksisterer (i omvendt rækkefølge pga. foreign keys)
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS houses;

-- 1. Houses
CREATE TABLE houses (
    house_id SERIAL PRIMARY KEY,
    house_name VARCHAR(100) NOT NULL UNIQUE
);

-- 2. Teachers
CREATE TABLE teachers (
    teacher_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house_id INT REFERENCES houses(house_id) ON DELETE SET NULL
);

-- 3. Students
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house_id INT REFERENCES houses(house_id) ON DELETE SET NULL
);

-- 4. Courses
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    teacher_id INT REFERENCES teachers(teacher_id) ON DELETE SET NULL
);

-- Eksempeldata (INSERT-kommandoer)
INSERT INTO houses (house_name) VALUES ('Gryffindor'), ('Slytherin'), ('Ravenclaw'), ('Hufflepuff');

INSERT INTO teachers (name, house_id) VALUES ('Minerva McGonagall', 1), ('Severus Snape', 2);

INSERT INTO students (name, house_id) VALUES ('Harry Potter', 1), ('Draco Malfoy', 2);

INSERT INTO courses (course_name, teacher_id) VALUES ('Transfiguration', 1), ('Potions', 2);