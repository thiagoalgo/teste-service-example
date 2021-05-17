import parser from 'co-body'

export async function updateTodo(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  // ctx.vtex.route.params

  console.info('Received params:', params)

  const { id } = params

  console.info('Id:', id)

  const data = await parser(ctx.req)

  console.info(data)

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
