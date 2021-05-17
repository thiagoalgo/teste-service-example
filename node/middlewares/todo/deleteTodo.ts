export async function deleteTodo(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  // ctx.vtex.route.params

  const { id } = params

  console.info('Id:', id)

  ctx.status = 200
  ctx.body = { id: 123456 }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
