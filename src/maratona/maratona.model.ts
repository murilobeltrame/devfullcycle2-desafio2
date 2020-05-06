import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'maratona'})
export class Maratona {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    aula: string;
}