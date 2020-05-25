const BL = require('./BL')
function Router(app) {

    app.get('/', (req, res) => {//it works
        res.send(`<h1>Hello world</h1>`)//'h1'
    })
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
            const result = await BL.products.read({ barcode: '', name: '', price: '' })
            res.send(result) //http://localhost:1111/prducts //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.put(`/prduct/:barcode`, async (req, res) => {//?
        try { //http://localhost:1234/prduct/:1234?newPrice=555555
            const { barcode } = req.params,
              //  { newPrice } = req.query//?
                 { body } = req
            const result = await BL.products.update(barcode, body)
            res.send(result)//http://localhost:1111/prduct/:2596 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.delete('/prduct/:barcode', async (req, res) => {
        try {
            const { barcode } = req.params
            const result = await BL.products.findOneAndDelete({ barcode: barcode })
            res.send(result) //http://localhost:1111/prducts //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
}
module.exports = Router