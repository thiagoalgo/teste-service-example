export async function getTodo(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { todo: todoClient },
  } = ctx

  // ctx.vtex.route.params

  const { id } = params

  const resp = await todoClient.get(id as string)

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
