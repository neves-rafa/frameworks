import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../repository";
import { UpdatetodoDto } from "../dto/update-todo.dto";

@Injectable ()
export class DeleteTodoUseCases {
    constructor (
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger,
    ) {}

    async update(id: string, data: UpdatetodoDto ) {
        try {
            this.logger.log('Delecting toDo...')

            const todo = await this.findTodoByIdRepository.findById(id);
            
            if (!todo) {
                throw new NotFoundException ('ToDo not found')
            }

            await this.updateTodoRepository.update(data, id)
            this.logger.log('Todos fetched successfully!');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to fetched todos');
        }
    }
}