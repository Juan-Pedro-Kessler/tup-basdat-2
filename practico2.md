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







# Ejercicio 8: Uso de `$lookup`

Realiza una agregación donde se combinen los datos de alumnos y cursos usando `$lookup`.

Base de datos: `utn`

## Inserción de datos

```js
db.materias.insertMany([
  { aula: 704, materia: "base de datos" },
  { aula: 203, materia: "programacion 1" }
]);

db.alumnos.insertMany([
  { nombre: "juan", materia: "base de datos", legajo: 22336 },
  { nombre: "fulano", materia: "programacion 1", legajo: 22456 },
  { nombre: "Pedro", materia: "base de datos", legajo: 23435 }
]);
```

## Consulta con `$lookup`

```js
db.alumnos.aggregate([
  {
    $lookup: {
      from: "materias",
      localField: "materia",
      foreignField: "materia",
      as: "info_materia"
    }
  },
  { $unwind: "$info_materia" },
  {
    $project: {
      _id: 0,
      nombre: 1,
      legajo: 1,
      materia: 1,
      aula: "$info_materia.aula"
    }
  }
]);
```

## Visualización de datos

```js
db.alumnos.find();
```

---

# Ejercicio 9: Replicación y Sharding (Teórico)

## Ventajas de usar **Replica Set**

- **Alta disponibilidad**: Si el servidor principal falla, otro servidor puede reemplazarlo automáticamente.
- **Seguridad de datos**: Al tener múltiples copias de los datos, el riesgo de pérdida de información se reduce significativamente.
- **Lectura distribuida**: Se puede distribuir la carga de lectura entre las réplicas secundarias, reduciendo la presión sobre el servidor principal.

## Beneficios del **Sharding** en bases de datos de alto volumen

- **Escalabilidad horizontal**: Permite distribuir los datos entre varios servidores, facilitando el manejo de grandes volúmenes de información.
- **Mejor rendimiento**: Al tener menos datos por servidor, las consultas pueden ejecutarse más rápido.
- **Distribución de carga**: El trabajo se reparte entre varios nodos, aumentando la eficiencia general del sistema.

# Ejercicio 10: (seguridad y backups)

-Crear un usuario con permisos de lectura y escritura:

    Para crear un usuario con permisos de lectura/escritura en la base de datos, se puede usar el comando:

    use empresa;  
    db.createUser({
    user: "lautaroAc",
    pwd: "12345678",        (datos de ej )
    roles: [
        { role: "readWrite", db: "empresa" }
    ]
    });

-Hacer un backup de la base de datos:

    - se usa la herramienta mongodump

    mongodump --db empresa --out /ruta/a/backup 

    (aca se especifica la ruta donde se hace el volcado de la db)


-Restaurar la base de datos:
    -se usa la herramienta mongorestore

    mongorestore --db empresa /ruta/a/backup/empresa

