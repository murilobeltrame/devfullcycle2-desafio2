import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MaratonaController } from './maratona.controller';
import { Maratona } from './maratona.model';

@Module({
  controllers: [MaratonaController],
  imports: [TypeOrmModule.forFeature([Maratona])],
  providers: []
})
export class MaratonaModule {}
