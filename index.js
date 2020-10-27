const express = require('express');

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("Servidor rodando com sucesso na porta 3333");
});

app.post('/soma', (request, response) => {
  const { a, b } = request.body;

  const soma = `A soma dos dois números inseridos: ${a + b}`;

  return response.json(soma)
})
