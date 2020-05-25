
const
    bodyParser = require('body-parser')
    express = require('express'),
    app = express(),
    router = require('./router'),
    port = 1234

app.use(bodyParser.json())

router(app)

app.listen(port, () => console.log(`Server running: ${port}`))
