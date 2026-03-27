import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdatetodoDto } from './dto/update-todo.dto';
import { CreateTodoUseCase, DeleteTodoUseCases, FindAllTodosUseCase, FindTodoByIdUseCases, UpdateTodoUseCases,  } from './use-cases';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodosUseCase: FindAllTodosUseCase,
    private readonly findTodoByIdUseCase: FindTodoByIdUseCases,
    private readonly updateTodoUseCase: UpdateTodoUseCases,
    private readonly deleteTodoUseCase: DeleteTodoUseCases
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.execute(createTodoDto);
  }

  findAll() {
    return this.findAllTodosUseCase.execute();
  }

  findById(id: string) {
    return this.findTodoByIdUseCase.findById(id);
  }

  update(id: string, updateTodoDto: UpdatetodoDto) {
    return this.updateTodoUseCase.update(id, updateTodoDto);
  }

  delete(id: string) {
    return this.deleteTodoUseCase.delete(id);
  }
}