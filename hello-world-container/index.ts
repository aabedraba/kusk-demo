import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

const router = new Router();

// log requests
app.use(async (ctx, next) => {
  console.log(ctx.request);
  await next();
});

router
  .get("/hello", (ctx) => {
    ctx.response.body = {
      message: "Hello from an implemented service!",
    };
  })
  .post("/validated", async (ctx) => {
    const requestBody = await ctx.request.body().value;
    ctx.response.body = { message: `Hello ${requestBody.name}!` };
  });

app.use(router.routes());

await app.listen({ port: 8080 });
