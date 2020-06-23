require('dotenv').config()
const
    bodyParser = require('body-parser')
    express = require('express'),
    app = express(),
    router = require('./router'),
    port = process.env.PORT //|| 1234

app.use(require('cors')())//to give axses thrue ather ports
app.use(bodyParser.json())

router(app)

app.listen(port, () => console.log(`Server running: ${port}`))
