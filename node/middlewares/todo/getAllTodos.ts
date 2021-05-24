export async function getAllTodos(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { todo: todoClient },
  } = ctx

  const resp = await todoClient.getAll(1, 50, 'description<>""')

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
