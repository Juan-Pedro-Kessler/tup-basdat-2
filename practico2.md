ejercicio 8: uso de $lookup Realiza una agregación donde se combinen los datos de alumnos y cursos usando $lookup.
use utn

db.materias.insertMany([
  {
    aula: 704,
    materia: "base de datos"
  },
  {
    aula: 203,
    materia: "programacion 1"
  }
])

db.alumnos.insertMany([
  {
    nombre: "juan",
    materia: "base de datos",
    legajo: 22336
  },
  {
    nombre: "fulano",
    materia: "programacion 1",
    legajo: 22456
  },
  {
    nombre: "Pedro",
    materia: "base de datos",
    legajo: 23435
  }
])

db.alumnos.aggregate([
  {
    $lookup: {
      from: "materias",
      localField: "materia",
      foreignField: "materia",
      as: "info_materia"
    }
  },
  {
    $unwind: "$info_materia"
  },
  {
    $project: {
      _id: 0,
      nombre: 1,
      legajo: 1,
      materia: 1,
      aula: "$info_materia.aula"
    }
  }
])


db.alumnos.find()
