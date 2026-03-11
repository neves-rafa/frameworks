import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdatetodoDto } from "../dto/update-todo.dto";
@Injectable()
export class UpdateTodoRepository{
    constructor(private readonly prisma: PrismaService) {}

    async execute(date: UpdatetodoDto, id: string) {
        return await this.prisma.todo.update({
            where: {
            id
        },date});
    }
}

