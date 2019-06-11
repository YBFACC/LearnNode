const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

router.get('user', '/users/:id',async(ctx,next)=>{
    ctx.response.body='pages'
}
  );
  
const userUrl=router.url('user',3);
console.log(userUrl);

 // 调用路由中间件
 app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})