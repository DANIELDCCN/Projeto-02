import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685407055985 implements MigrationInterface {
    name = 'Default1685407055985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`datePurchase\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`datePurchase\``);
    }

}
