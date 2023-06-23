import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684808520032 implements MigrationInterface {
    name = 'Default1684808520032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`salaryEmployee\``);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`salaryEmployee\` decimal(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`salaryEmployee\``);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`salaryEmployee\` int NOT NULL`);
    }

}
