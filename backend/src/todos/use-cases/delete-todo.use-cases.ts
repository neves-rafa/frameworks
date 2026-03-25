import { Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoByIdRepository} from "../repository";

@Injectable ()
export class DeleteTodoUseCases {
    constructor (
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id: string) {
        try {
            this.logger.log('Delecting toDo...')

            const todo = await this.findTodoByIdRepository.findById(id);
            
            if (!todo) {
                throw new NotFoundException('ToDo not found')
            }

            await this.deleteTodoRepository.delete(id)
            this.logger.log('Todos fetched successfully!');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to fetched todos');
        }
    }
}                         