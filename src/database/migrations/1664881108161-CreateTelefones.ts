import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTelefones1664881108161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "telefones",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "instrutor_id",
            type: "int",
          },
          {
            name: "tipo",
            type: "varchar",
          },
          {
            name: "telefone",
            type: "varchar",
          },
        ],
        foreignKeys: [
          {
            name: "FKInstrutor",
            referencedTableName: "instrutor",
            referencedColumnNames: ["id"],
            columnNames: ["instrutor_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("telefones");
  }
}
