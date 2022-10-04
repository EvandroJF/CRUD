#Com base nas Q3 e Q4

fiz o crud baseado no caso de uso da questão 1 e Baseado nos contratos criados na questão 3, implemente as APIs persistindo os dados em um
banco de dados relacional

tabelas foi feita no databse.sqlite a Q4 pede banco relacional mas para facilitar já que o tempo foi curto fiz no sqlite, assim usado a Extenção do vscode para ver os dados,
mas para utilizar outro formato de banco é so mudar as conficurações do arquivo (ormconfig.json) e o arquivo (.env).

#Instrutor
GET - http://localhost:3333/instruto

DELETE - http://localhost:3333/instruto/UUID

PUT - http://localhost:3333/instruto/UUID
{
"name": "kkkkkk",
"RG": "12345",
"data_nascimento": "1987-10-04"
}

POST - http://localhost:3333/instruto/UUID
{
"name": "kkkkkk",
"RG": "12345",
"data_nascimento": "1987-10-04"
}

#turma

GET - http://localhost:3333/turma

DELETE - http://localhost:3333/turma/UUID

PUT - http://localhost:3333/turma/UUID
{
"aluno_QM": 21,
"horario_Aula": "13:54:18",
"duracao_Aula": "00:50:00",
"data_inicial": "2022-01-01",
"data_final": "2022-12-31"
}
POST - http://localhost:3333/turma/UUID
{
"aluno_QM": 21,
"horario_Aula": "13:54:18",
"duracao_Aula": "00:50:00",
"data_inicial": "2022-01-01",
"data_final": "2022-12-31"
}

#aluno

GET - http://localhost:3333/aluno

DELETE - http://localhost:3333/aluno/UUID

PUT - http://localhost:3333/aluno/UUID
{
"name": "Eaaaaaa",
"matricula": "M0239",
"endereco": "Rua aqui perto,CE",
"telefone": "88888888888",
"altura": "1.85",
"peso": "65",
"data_nascimento": "1999-10-04",
"date_maticula": "2022-10-04",
"turma_id": "4cb0f323-53e7-4c96-a900-08094f1a379c"
}
POST - http://localhost:3333/aluno/UUID
{
"name": "Eaaaaaa",
"matricula": "M0239",
"endereco": "Rua aqui perto,CE",
"telefone": "88888888888",
"altura": "1.85",
"peso": "65",
"data_nascimento": "1999-10-04",
"date_maticula": "2022-10-04",
"turma_id": "4cb0f323-53e7-4c96-a900-08094f1a379c"
}
