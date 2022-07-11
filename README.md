# node-express-mongoose
Basic CRUD API with NodeJS ExpressJS and MongoDB

1. Clone it
2. npm install
3. npm start

## That is It

# --- Technologies Used ---

- NodeJs
- ExpressJs
- Mongo Db

# CRUD API:

- Create (POST: /api/projects/add , { body: { title, description, startDate, endDate, ganttChart: [], resources: [] } })
- Update (PATCH: /api/projects/update/:id)
- Get all (GET: /api/projects) ?pageSize=5&pageNo=2&sortCol=title&sortDir=desc&search=2
- Get By id (GET: /api/projects/:id)
- Delete (DELETE: /api/projects/delete/:id)
