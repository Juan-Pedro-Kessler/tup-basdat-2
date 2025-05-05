use("colegio");

db.createCollection("cursos");
db.createCollection("alumnos");

// ObjectIds únicos para los cursos
const curso1 = ObjectId();
const curso2 = ObjectId();
const curso3 = ObjectId();
const curso4 = ObjectId();

// insertaMOS los cursos con sus Ids
db.cursos.insertMany([
    {
        _id: curso1,
        nombre: "Matemática Discreta",
        profesor: "Lucía Martínez",
        clases: [
            { dia: "lunes", hora: "9am", aula: "101" },
            { dia: "miércoles", hora: "9am", aula: "101" }
        ]
    },
    {
        _id: curso2,
        nombre: "Algoritmos y Estructuras de Datos",
        profesor: "Carlos Gómez",
        clases: [
            { dia: "martes", hora: "11am", aula: "102" },
            { dia: "jueves", hora: "11am", aula: "102" }
        ]
    },
    {
        _id: curso3,
        nombre: "Sistemas Operativos",
        profesor: "Paula Torres",
        clases: [
            { dia: "miércoles", hora: "2pm", aula: "201" },
            { dia: "viernes", hora: "2pm", aula: "201" }
        ]
    },
    {
        _id: curso4,
        nombre: "Redes de Computadoras",
        profesor: "Esteban López",
        clases: [
            { dia: "lunes", hora: "4pm", aula: "202" },
            { dia: "miércoles", hora: "4pm", aula: "202" }
        ]
    }
]);

// insertamos alumnos con lista a cursos
db.alumnos.insertMany([
    {
        _id: ObjectId(),
        nombre: "Agustina",
        apellido: "Morales",
        cursos: [
            { curso: curso1, estado: "cursando" },
            { curso: curso2, estado: "aprobada", nota: 8 },
            { curso: curso3, estado: "aprobada", nota: 9 },
            { curso: curso4, estado: "aprobada", nota: 10 }
        ]
    },
    {
        _id: ObjectId(),
        nombre: "Franco",
        apellido: "Vega",
        cursos: [
            { curso: curso1, estado: "cursando" },
            { curso: curso2, estado: "cursando" },
            { curso: curso4, estado: "aprobada", nota: 6 }
        ]
    },
    {
        _id: ObjectId(),
        nombre: "Valentina",
        apellido: "Ríos",
        cursos: [
            { curso: curso1, estado: "cursando" },
            { curso: curso2, estado: "cursando" },
            { curso: curso3, estado: "aprobada", nota: 7 },
            { curso: curso4, estado: "aprobada", nota: 8 }
        ]
    },
    {
        _id: ObjectId(),
        nombre: "Julián",
        apellido: "Álvarez",
        cursos: [
            { curso: curso1, estado: "cursando" },
            { curso: curso2, estado: "cursando" },
            { curso: curso3, estado: "aprobada", nota: 9 },
            { curso: curso4, estado: "aprobada", nota: 10 }
        ]
    }
]);
