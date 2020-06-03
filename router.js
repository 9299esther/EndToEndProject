const BL = require('./BL')
function Router(app) {

    // app.get('/', (req, res) => {//it works
    //     res.send(`<h1>Hello world</h1>`)//'h1'
    // })
    app.post('/prduct', async (req, res) => {//v
        try {
            const { body } = req

            const result = await BL.products.create({
                barcode: body.barcode,
                name: body.name,
                price: body.price,
                department: body.department,
                category: body.category,
                image: body.image,
                brand: body.brand,
                tags: body.tags,
                description: body.description
            })
            res.send(result)//http://localhost:1111/prduct //[{...}]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prduct', async (req, res) => {//v
        try {
            const result = await BL.products.read()
            res.send(result) //http://localhost:1111/prduct //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prductFilter/:filter', async (req, res) => {//?/?
        try {
            const { category } = req.params
            const result = await BL.products.readOneByCategory(category)
            res.send(result) //http://localhost:1111/prductFilter/filter 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prductFilter/', async (req, res) => {//?/?
        try {
            const { from,to } = req.body
            const result = await BL.products.readOneByPrice(from,to)
            res.send(result) //http://localhost:1111/prductFilter/filter 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prduct/:barcode', async (req, res) => {//v
        try {
            const { barcode } = req.params
            const result = await BL.products.readOne(Number(barcode) ? Number(barcode) : barcode)
            res.send(result) //http://localhost:1111/prduct/barcode //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.put('/prduct', async (req, res) => {//?
        try {
            const { body } = req
            const result = await BL.products.update({ barcode: body.barcode, price: body.price })
            res.send(result)//http://localhost:1111/prduct 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.delete('/prduct', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.products.delete({ barcode: body.barcode })
            res.send(result) //http://localhost:1111/prduct //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
}
module.exports = Router