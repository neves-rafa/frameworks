import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class CreateTodoRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findAll(id: string) {
        return await this.prisma.todo.findUnique({
            where: {
                id
            }
        });
    }
}


