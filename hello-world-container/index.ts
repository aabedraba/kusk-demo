import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

const router = new Router();

app.use((ctx, next) => {
  console.log(ctx.request);
  next();
});

router.get("/hello", (ctx) => {
  return (ctx.response.body = "Hello from an implemented service!");
});

router.post("/validated", async (ctx) => {
  const requestBody = await ctx.request.body().value;
  return (ctx.response.body = `Hello ${requestBody.name}!`);
});

app.use(router.routes());
await app.listen({ port: 8080 });
