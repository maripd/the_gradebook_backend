const express = require('express')
const cors = require('cors')
const StudentsRouter = require('./routes/StudentsRouter')
const CoursesRouter = require('./routes/CoursesRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

//routes
app.use('/students', StudentsRouter)
app.use('/courses', CoursesRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
