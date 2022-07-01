import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  if (!req.url.includes('_frsh') && !req.url.includes('favicon.ico')) {
    console.log('first')
  }

  const resp = await ctx.next();
  
  if (!req.url.includes('_frsh') && !req.url.includes('favicon.ico')) {
    console.log('last')
  }

  return resp;
}