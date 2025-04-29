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


ejercicio 9: Replicación y sharding (teórico) Describe con tus palabras las ventajas de usar un Replica Set y qué beneficios aporta el sharding en una base de datos de alto volumen.

ventajas de usar replica set:
alta disponibilidad: si el servidor principal da un error, otro servidor puede remplazarlo.
seguridad de datos: al tener muchas copias, el riesgo de perdida de informacion es mas bajo.
lectura distribuida: se puede distribuir la lectura entre las replicas secundarias para que el servidor principal sea menos exigido.

sharding:
beneficios del sharding en bases de datos de alto volumen:
escalabilidad horizontal: permite distribuir datos en varios servidores, haciendo posible manejar grandes cantidades de informacion.
mejor rendimiento: al tener menos datos por servidor, las consultas se vuelven mas rapidas.
distribucion de carga: el trabajo se reparte entre varios nodos, lo cual es mas eficiente.
