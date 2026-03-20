import { Inject, Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository} from "../repository";

@Injectable ()
export class DeleteTodoUseCases {
    constructor (
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id: string) {
        try {
            this.logger.log('Fetching all todos...')
            const todo = await this.deleteTodoRepository.delete(id);
            this.logger.log('Todos fetched successfully!');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to fetched todos');
        }
    }
}