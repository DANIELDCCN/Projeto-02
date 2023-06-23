import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1686008204433 implements MigrationInterface {
    name = 'Default1686008204433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`idProduct\` int NOT NULL AUTO_INCREMENT, \`nameProduct\` varchar(255) NOT NULL, \`descProduct\` varchar(255) NULL, \`valueUnitProduct\` decimal(5,2) NOT NULL, \`countProduct\` int NOT NULL, PRIMARY KEY (\`idProduct\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`cpfEmployee\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`nameOrder\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`cpfOrder\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`salaryOrder\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`countOrder\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`countOrder\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`salaryOrder\` decimal(5,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`cpfOrder\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`nameOrder\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`cpfEmployee\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
