import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TurmaRepository } from "../repositories/TurmaRepository";

class TurmaController {
  async create(request: Request, response: Response) {
    const { aluno_QM, horario_Aula, duracao_Aula, data_inicial, data_final } =
      request.body;

    const turmaRepository = getCustomRepository(TurmaRepository);
    const turma = turmaRepository.create({
      aluno_QM,
      horario_Aula,
      duracao_Aula,
      data_inicial,
      data_final,
    });

    await turmaRepository.save(turma);

    return response.status(201).json(turma);
  }

  async show(request: Request, response: Response) {
    const turmaRepository = getCustomRepository(TurmaRepository);

    const all = await turmaRepository.find();

    return response.json(all);
  }

  async excute(request: Request, response: Response) {
    const { id } = request.params;
    const turmaRepository = getCustomRepository(TurmaRepository);

    if (!(await turmaRepository.findOne(id))) {
      return new Error("turma não existe");
    }

    await turmaRepository.delete(id);
    return response.status(204).end();
  }

  async put(request: Request, response: Response) {
    const { id } = request.params;
    const { aluno_QM, horario_Aula, duracao_Aula, data_inicial, data_final } =
      request.body;

    const turmaRepository = getCustomRepository(TurmaRepository);

    const turma = await turmaRepository.findOne(id);

    if (!turma) {
      return new Error("turma não existe");
    }

    turma.aluno_QM = aluno_QM ? aluno_QM : turma.aluno_QM;
    turma.horario_Aula = horario_Aula ? horario_Aula : turma.horario_Aula;
    turma.duracao_Aula = duracao_Aula ? duracao_Aula : turma.duracao_Aula;
    turma.data_inicial = data_inicial ? data_inicial : turma.data_inicial;
    turma.data_final = data_final ? data_final : turma.data_final;
    await turmaRepository.save(turma);

    return response.json(turma);
  }
}

export { TurmaController };
