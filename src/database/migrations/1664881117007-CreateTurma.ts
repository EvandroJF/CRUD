import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTurma1664881117007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "turma",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "aluno_QM",
            type: "int",
          },
          {
            name: "horario_Aula",
            type: "time",
          },
          {
            name: "duracao_Aula",
            type: "time",
          },
          {
            name: "data_inicial",
            type: "date",
          },
          {
            name: "data_final",
            type: "timestamp",
            default: "NOW()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("turma");
  }
}
