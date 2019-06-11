const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const UserRouter = require('./routers/UserRouter')

app.use(bodyParser())

UserRouter(app)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})