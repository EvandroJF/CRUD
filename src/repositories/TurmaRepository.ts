import { EntityRepository, Repository } from "typeorm";
import { Turma } from "../models/Turma";

@EntityRepository(Turma)
class TurmaRepository extends Repository<Turma> {}

export { TurmaRepository };
