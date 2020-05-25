const BL = require('./BL')
function Router(app) {

    /*  app.get('/', (req, res) => {//it works
         res.send(`<h1>Hello world</h1>`)//'h1'
     })*/
    app.post('/prduct', async (req, res) => {//v
        try {
            const { body } = req

            const result = await BL.products.create({ barcode: body.barcode, name: body.name, price: body.price, description: body.description })
            res.send(result)//http://localhost:1111/prduct //[{...}]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prducts', async (req, res) => {//v
        try {
            const result = await BL.products.read({ barcode: '', name: '',price:'' })
            res.send(result)//http://localhost:1111/prducts //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.put('/prduct/:barcode/?newPrice', async (req, res) => {//?
        try {
            const { barcode, newPrice } = req.query//?

            const result = await BL.products.update(barcode, newPrice)
            res.send(result)//http://localhost:1111/prduct/:2596 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
}
module.exports = Router