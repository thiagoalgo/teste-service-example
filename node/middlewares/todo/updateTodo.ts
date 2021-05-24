import parser from 'co-body'

export async function updateTodo(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { todo: todoClient },
  } = ctx

  // ctx.vtex.route.params

  console.info('Received params:', params)

  const { id } = params

  const data = await parser(ctx.req)

  const resp = await todoClient.update(id as string, data)

  ctx.status = 200
  ctx.body = resp
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
