import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRegistro1664881138485 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "registro",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "aluno_id",
            type: "int",
          },
          {
            name: "presenca",
            type: "boolean",
          },
          {
            name: "presenca_date",
            type: "timestamp",
            default: "NOW()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("registro");
  }
}
