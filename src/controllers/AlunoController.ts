import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { AlunoRepository } from "../repositories/AlunoRepository";

class AlunoController {
  async create(request: Request, response: Response) {
    const {
      name,
      matricula,
      endereco,
      telefone,
      altura,
      peso,
      data_nascimento,
      data_maticula,
      turma_id,
    } = request.body;

    const alunoRepository = getCustomRepository(AlunoRepository);

    const instrutor = alunoRepository.create({
      name,
      matricula,
      endereco,
      telefone,
      altura,
      peso,
      data_nascimento,
      data_maticula,
      turma_id,
    });

    await alunoRepository.save(instrutor);

    return response.status(201).json(instrutor);
  }

  async show(request: Request, response: Response) {
    const alunoRepository = getCustomRepository(AlunoRepository);

    const all = await alunoRepository.find();

    return response.json(all);
  }

  async excute(request: Request, response: Response) {
    const { id } = request.params;
    const alunoRepository = getCustomRepository(AlunoRepository);

    if (!(await alunoRepository.findOne(id))) {
      return new Error("Instrutor não existe");
    }

    await alunoRepository.delete(id);
    return response.status(204).end();
  }

  async put(request: Request, response: Response) {
    const { id } = request.params;
    const {
      name,
      matricula,
      endereco,
      telefone,
      altura,
      peso,
      data_nascimento,
      date_maticula,
      turma_id,
    } = request.body;

    const alunoRepository = getCustomRepository(AlunoRepository);

    const instrutor = await alunoRepository.findOne(id);

    if (!instrutor) {
      return new Error("Instrutor não existe");
    }

    instrutor.name = name ? name : instrutor.name;
    instrutor.matricula = matricula ? matricula : instrutor.matricula;
    instrutor.endereco = endereco ? endereco : instrutor.endereco;
    instrutor.telefone = telefone ? telefone : instrutor.telefone;
    instrutor.altura = altura ? altura : instrutor.altura;
    instrutor.peso = peso ? peso : instrutor.peso;
    instrutor.data_nascimento = data_nascimento
      ? data_nascimento
      : instrutor.data_nascimento;
    instrutor.data_maticula = date_maticula
      ? date_maticula
      : instrutor.data_maticula;
    instrutor.turma_id = turma_id ? turma_id : instrutor.turma_id;

    await alunoRepository.save(instrutor);

    return response.json(instrutor);
  }
}

export { AlunoController };
