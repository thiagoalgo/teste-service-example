export async function deleteTodo(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { todo: todoClient },
  } = ctx

  // ctx.vtex.route.params

  const { id } = params

  await todoClient.delete(id as string)

  ctx.status = 200
  ctx.body = { id }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
