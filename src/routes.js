import { Router } from "express";
import { InstrutorController } from "./controllers/InstrutorController";
import { TurmaController } from "./controllers/TurmaController";
import { AlunoController } from "./controllers/AlunoController";

const router = Router();

const instrutorController = new InstrutorController();
const turmaController = new TurmaController();
const alunoController = new AlunoController();

router.post("/instruto", instrutorController.create);
router.get("/instruto", instrutorController.show);
router.delete("/instruto/:id", instrutorController.excute);
router.put("/instruto/:id", instrutorController.put);

router.post("/turma", turmaController.create);
router.get("/turma", turmaController.show);
router.delete("/turma/:id", turmaController.excute);
router.put("/turma/:id", turmaController.put);

router.post("/aluno", alunoController.create);
router.get("/aluno", alunoController.show);
router.delete("/aluno/:id", alunoController.excute);
router.put("/aluno/:id", alunoController.put);

export { router };
