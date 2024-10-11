# Task Manager API

API RESTful para la gestión de tareas (To-Do List), desarrollada con **Node.js**, **TypeScript**, **Express**, y **PostgreSQL**. La API implementa operaciones CRUD con los patrones de diseño **Factory** y **Facade**.

## Requisitos

- Node.js
- PostgreSQL

## Configuración

1. Clona el repositorio:

```bash
git clone https://github.com/sbotargues/task-manager-api.git
cd task-manager-api
```

2. Instala las dependencias

```bash
yarn
```

3.  Configura la base de datos PostgreSQL
    - Crea una base de datos llamada **task_manager**:

```bash
createdb task_manager
```

4.  Ejecuta las migraciones para configurar las tablas:

```bash
npx sequelize-cli db:migrate
```

## Ejecución

- Inicia el servidor:

```bash
yarn dev
```

El servidor estará disponible en **http://localhost:8000**

## Endpoints

## Endpoints

### Crear una tarea

- **POST** `/api/tasks`
- **Body**:

  ```json
  {
    "title": "Título de la tarea",
    "description": "Descripción de la tarea"
  }
  ```

  ### Obtener todas las tareas

- **GET** `/api/tasks`
- **Response**:

  ```json
  [
    {
      "id": "uuid",
      "title": "Título de la tarea",
      "description": "Descripción de la tarea",
      "createdAt": "Fecha de creación"
    }
  ]
  ```

  ### Obtener una tarea por ID

- **GET** `/api/tasks/:id`
- **Response**:

  ```json
  {
    "id": "uuid",
    "title": "Título de la tarea",
    "description": "Descripción de la tarea",
    "createdAt": "Fecha de creación"
  }
  ```

  ### Actualizar una tarea

- **PUT** `/api/tasks/:id`
- **Body**:
  ```json
  {
    "title": "Nuevo título",
    "description": "Nueva descripción"
  }
  ```
- **Respuesta**:

  ```json
  {
    "id": "uuid",
    "title": "Nuevo título",
    "description": "Nueva descripción",
    "createdAt": "Fecha de creación"
  }
  ```

### Eliminar una tarea

- **DELETE** `/api/tasks/:id`

- **Response**:

  ```json
  {
    "message": "Tarea eliminada"
  }
  ```

## Estructura del proyecto

task-manager-api/ # Carpeta raíz del proyecto
│
├── config/ # Configuración de Sequelize para la base de datos
│ └── config.json
│
├── migrations/ # Migraciones de la base de datos (generadas por Sequelize)
│ └── <timestamp>-create-task.js
│
├── node_modules/ # Dependencias instaladas vía npm (automáticamente generada)
│
├── src/ # Código fuente del proyecto
│ │
│ ├── controllers/ # Controladores que manejan las peticiones HTTP
│ │ └── taskController.ts
│ │
│ ├── facades/ # Implementación del patrón Facade para la lógica de negocio
│ │ └── taskFacade.ts
│ │
│ ├── factories/ # Implementación del patrón Factory para la creación de tareas
│ │ └── taskFactory.ts
│ │
│ ├── models/ # Definición de modelos y tipos de datos (Sequelize)
│ │ ├── index.ts # Inicialización de la conexión a la base de datos
│ │ └── task.ts # Modelo de la entidad Task
│ │
│ ├── routes/ # Rutas de la API
│ │ └── taskRoutes.ts
│ │
│ ├── services/ # Servicios que manejan la lógica de negocio y base de datos
│ │ └── taskService.ts
│ │
│ └── index.ts # Punto de entrada principal de la aplicación
│
├── package.json # Definición de dependencias y scripts de npm
│
├── package-lock.json # Bloqueo de versiones de dependencias (generado automáticamente)
│
├── tsconfig.json # Configuración de TypeScript
│
└── README.md # Documentación del proyecto (este archivo)
