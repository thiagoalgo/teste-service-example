export async function getAllTodos(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = {
    data: [
      { id: 123456, description: 'Imlpementar método getAllTodos' },
      { id: 987654, description: 'Imlpementar método getTodo' },
    ],
  }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}
