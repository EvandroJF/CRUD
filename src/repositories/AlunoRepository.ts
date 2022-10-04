import { EntityRepository, Repository } from "typeorm";
import { Alunos } from "../models/Alunos";

@EntityRepository(Alunos)
class AlunoRepository extends Repository<Alunos> {}

export { AlunoRepository };
