import { Injectable, Logger } from "@nestjs/common";
import { UpdatetodoDto } from "../dto/update-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";
@Injectable()
export class UpdateTodoRepository{
    constructor(private readonly prisma: PrismaService){}

    async update(data: UpdatetodoDto, id:string
    ){
        return await this.prisma.todo.update({where: {id}, data})
    }
}