const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const db = require('./models')

db.sequelize.sync({ force: true }).then(() => {
    // put this in the beginning of your app.js/server.js

    app.use(express.json())
    app.use(routes)

    const PORT = process.env.PORT || 3001
    const FRONTENDPORT = process.env.FRONTENDPORT || 3000; //assuming react
    const corsOptions = {
        origin: `http://localhost:${FRONTENDPORT}`,
    }

    app.use(cors(corsOptions))

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
        app.emit('app_started')
    })
})

module.exports = app
