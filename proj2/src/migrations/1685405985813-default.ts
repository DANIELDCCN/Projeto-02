import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685405985813 implements MigrationInterface {
    name = 'Default1685405985813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order\` (\`idOrder\` int NOT NULL AUTO_INCREMENT, \`nameOrder\` varchar(255) NOT NULL, \`cpfOrder\` varchar(255) NOT NULL, \`salaryOrder\` decimal(5,2) NOT NULL, \`countOrder\` int NOT NULL, \`clientIdClient\` int NULL, \`employeeIdEmployee\` int NULL, UNIQUE INDEX \`REL_2936682a6f483cffcd6edbae8a\` (\`clientIdClient\`), UNIQUE INDEX \`REL_2047bac56abbc37da219b9b283\` (\`employeeIdEmployee\`), PRIMARY KEY (\`idOrder\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`idProducts\` int NOT NULL AUTO_INCREMENT, \`nameProducts\` varchar(255) NOT NULL, \`cpfProducts\` varchar(255) NOT NULL, \`salaryProducts\` decimal(5,2) NOT NULL, \`countProduct\` int NOT NULL, PRIMARY KEY (\`idProducts\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_2936682a6f483cffcd6edbae8a7\` FOREIGN KEY (\`clientIdClient\`) REFERENCES \`client\`(\`idClient\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_2047bac56abbc37da219b9b2838\` FOREIGN KEY (\`employeeIdEmployee\`) REFERENCES \`employee\`(\`idEmployee\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_2047bac56abbc37da219b9b2838\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_2936682a6f483cffcd6edbae8a7\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP INDEX \`REL_2047bac56abbc37da219b9b283\` ON \`order\``);
        await queryRunner.query(`DROP INDEX \`REL_2936682a6f483cffcd6edbae8a\` ON \`order\``);
        await queryRunner.query(`DROP TABLE \`order\``);
    }

}
