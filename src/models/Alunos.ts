import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Turma } from "./Turma";

@Entity("alunos")
class Alunos {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  matricula: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  altura: string;

  @Column()
  peso: string;

  @CreateDateColumn()
  data_nascimento: Date;

  @CreateDateColumn()
  data_maticula: Date;

  @Column()
  turma_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Alunos };
