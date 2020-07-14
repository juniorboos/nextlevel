import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path'
const app = express();

app.use(express.json());

app.use(cors());
// Rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informações do back-end
// POST: criar uma nova informação no back-end
// PUT: atualizar uma informação existente no back-end
// DELETE: remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID = 5

// Request Param: parametros que vem na própria rota que identificam um recurso
// Query Param: parametros que vem na própria rota geralmente opcionais para filtros, paginação, etc
// Request Body: parametros para criação/atualização de informações

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);