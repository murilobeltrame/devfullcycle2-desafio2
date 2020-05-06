import { Controller, Get, Post, Request, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from './maratona.model';
import { Repository } from 'typeorm';

@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepository: Repository<Maratona>
    ){}

    @Get()
    async index() {
        return await this.maratonaRepository.find()
    }

    @Post()
    async post(@Req() request: Request) {
        const maratona = this.maratonaRepository.create(request.body as any)
        await this.maratonaRepository.save(maratona)
        return maratona
    }
}
