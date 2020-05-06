import {MigrationInterface, QueryRunner} from "typeorm";

export class updateMaratona1588740955743 implements MigrationInterface {
    name = 'updateMaratona1588740955743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_maratona" ("id" varchar PRIMARY KEY NOT NULL, "aula" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_maratona"("id", "aula") SELECT "id", "aulas" FROM "maratona"`, undefined);
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_maratona" RENAME TO "maratona"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maratona" RENAME TO "temporary_maratona"`, undefined);
        await queryRunner.query(`CREATE TABLE "maratona" ("id" varchar PRIMARY KEY NOT NULL, "aulas" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "maratona"("id", "aulas") SELECT "id", "aula" FROM "temporary_maratona"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_maratona"`, undefined);
    }

}
