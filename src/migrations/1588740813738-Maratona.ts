import {MigrationInterface, QueryRunner} from "typeorm";

export class Maratona1588740813738 implements MigrationInterface {
    name = 'Maratona1588740813738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maratona" ("id" varchar PRIMARY KEY NOT NULL, "aulas" varchar NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
    }

}
