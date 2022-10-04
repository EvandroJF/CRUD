import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Timestamp,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Alunos } from "./alunos";
import { Instruto } from "./Instrutor";

@Entity("turma")
class Turma {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  aluno_QM: number;

  @Column()
  horario_Aula: string;

  @Column()
  duracao_Aula: string;

  @CreateDateColumn()
  data_inicial: Date;

  @CreateDateColumn()
  data_final: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Turma };
