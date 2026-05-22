import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { Logger, Module } from '@nestjs/common';
import { AuthController } from './auth.controlller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { JwtModule } from '@nestjs/jwt';


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d'},
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        PrismaService,
        Logger,
        ...repositories,
        ...useCases,
    ],
})
export class AuthModule {}