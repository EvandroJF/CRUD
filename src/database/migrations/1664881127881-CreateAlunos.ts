import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlunos1664881127881 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alunos",
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
            name: "matricula",
            type: "varchar",
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "telefone",
            type: "varchar",
          },
          {
            name: "altura",
            type: "numeric",
          },
          {
            name: "peso",
            type: "numeric",
          },
          {
            name: "data_nascimento",
            type: "date",
          },
          {
            name: "data_maticula",
            type: "date",
          },
          {
            name: "turma_id",
            type: "uuid",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alunos");
  }
}
