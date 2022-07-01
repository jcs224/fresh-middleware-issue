import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  console.log('first joke api')
  const resp = await ctx.next()
  console.log('last joke api')

  return resp;
}