import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("instrutor")
class Instruto {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  RG: string;

  @CreateDateColumn()
  data_nascimento: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Instruto };
