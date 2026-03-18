import { Logger } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { CreateTodoRepository } from "../repository";

export class CreateTodoUseCase {
    constructor(
        private readonly createTodoRepository: CreateTodoRepository,
        private readonly logger: Logger
    ) {}

    async execute( data: CreateTodoDto) {
        try {
            this.logger.log('creating toDo...');
            const todo = await this.createTodoRepository.execute(data);
            this.logger.log('ToDo created successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to createe toDo');
        }

        }
    }