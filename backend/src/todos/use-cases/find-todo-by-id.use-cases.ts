import { Inject, Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository";

@Injectable ()
export class FindTodoByIdUseCases {
    constructor (
        private readonly deleteTodoRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}

    async findById(id: string) {
        try {
            this.logger.log('Fetching todo...')
            const todo = await this.deleteTodoRepository.findById(id);
            this.logger.log('Todo fetched successfully!');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to fetched todo');
        }
    }
}