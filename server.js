const express = require('express')
const cors = require('cors')
const StudentsRouter = require('./routes/StudentsRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

//routes
app.use('/students', StudentsRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
