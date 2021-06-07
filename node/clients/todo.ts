import { MasterData } from '@vtex/api'

import type { TodoInput } from '../typings/todoInput'

export default class Todo extends MasterData {
  public async get(id: string): Promise<any> {
    const resp = await this.getDocument({
      dataEntity: 'todo',
      id,
      fields: ['_all'],
    })

    return resp
  }

  public async getAll(page: number, pageSize: number, where: string) {
    const resp = await this.searchDocumentsWithPaginationInfo({
      dataEntity: 'todo',
      fields: ['_all'],
      where,
      pagination: { page, pageSize },
      schema: 'todo',
    })

    return resp
  }

  public async create(todoInput: TodoInput) {
    const resp = await this.createDocument({
      dataEntity: 'todo',
      fields: todoInput,
      schema: 'todo',
    })

    return { id: resp.DocumentId, ...todoInput }
  }

  public async update(id: string, todoInput: TodoInput) {
    await this.updatePartialDocument({
      id,
      dataEntity: 'todo',
      fields: todoInput,
    })

    return { id, ...todoInput }
  }

  public async delete(id: string) {
    await this.deleteDocument({
      dataEntity: 'todo',
      id,
    })
  }
}
