import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInstrutor1664881054066 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "instrutor",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "RG",
            type: "varchar",
          },
          {
            name: "data_nascimento",
            type: "date",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "NOW()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("instrutor");
  }
}
