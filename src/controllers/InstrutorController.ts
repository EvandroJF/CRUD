import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { InstrutorRepository } from "../repositories/InstrutorRepository";

class InstrutorController {
  async create(request: Request, response: Response) {
    const { name, RG, data_nascimento } = request.body;

    const instrutorRepository = getCustomRepository(InstrutorRepository);

    const instrutor = instrutorRepository.create({
      name,
      RG,
      data_nascimento,
    });

    await instrutorRepository.save(instrutor);

    return response.status(201).json(instrutor);
  }

  async show(request: Request, response: Response) {
    const instrutorRepository = getCustomRepository(InstrutorRepository);

    const all = await instrutorRepository.find();

    return response.json(all);
  }

  async excute(request: Request, response: Response) {
    const { id } = request.params;
    const instrutorRepository = getCustomRepository(InstrutorRepository);

    if (!(await instrutorRepository.findOne(id))) {
      return new Error("Instrutor não existe");
    }

    await instrutorRepository.delete(id);
    return response.status(204).end();
  }

  async put(request: Request, response: Response) {
    const { id } = request.params;
    const { name, RG, data_nascimento } = request.body;

    const instrutorRepository = getCustomRepository(InstrutorRepository);

    const instrutor = await instrutorRepository.findOne(id);

    if (!instrutor) {
      return new Error("Instrutor não existe");
    }

    instrutor.RG = RG ? RG : instrutor.RG;
    instrutor.name = name ? name : instrutor.name;
    instrutor.data_nascimento = data_nascimento
      ? data_nascimento
      : instrutor.data_nascimento;

    await instrutorRepository.save(instrutor);

    return response.json(instrutor);
  }
}

export { InstrutorController };
