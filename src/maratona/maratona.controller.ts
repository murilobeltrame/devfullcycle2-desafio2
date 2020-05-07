import { Controller, Get, Post, Request, Req, Param, Put, Delete } from '@nestjs/common';
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

    @Get(':id')
    async get(@Param('id') id: string) {
        return await this.maratonaRepository.findOneOrFail({where: {id}})
    }

    @Put(':id')
    async put(@Param('id') id: string, @Req() request: Request) {
        await this.maratonaRepository.update(id, request.body as any)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.maratonaRepository.delete(id)
    }
}
