import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684806292246 implements MigrationInterface {
    name = 'Default1684806292246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nameClient\` varchar(255) NOT NULL, \`cpfClient\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`client\``);
    }

}
