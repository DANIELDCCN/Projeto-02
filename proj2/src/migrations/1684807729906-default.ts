import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684807729906 implements MigrationInterface {
    name = 'Default1684807729906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`client\` CHANGE \`id\` \`idClient\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`idEmployee\` int NOT NULL AUTO_INCREMENT, \`nameEmployee\` varchar(255) NOT NULL, \`cpfEmployee\` varchar(255) NOT NULL, \`salaryEmployee\` int NOT NULL, PRIMARY KEY (\`idEmployee\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`ALTER TABLE \`client\` CHANGE \`idClient\` \`id\` int NOT NULL AUTO_INCREMENT`);
    }

}
