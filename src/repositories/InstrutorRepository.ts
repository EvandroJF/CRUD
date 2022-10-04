import { EntityRepository, Repository } from "typeorm";
import { Instruto } from "../models/Instrutor";

@EntityRepository(Instruto)
class InstrutorRepository extends Repository<Instruto> {}

export { InstrutorRepository };
