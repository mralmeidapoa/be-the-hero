const express = require('express');

const app = express();

app.use(express.json());

    /**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET:    Buscar uma info do back-end
 * POST:   Criar
 * PUT:    Alterar
 * DELETE: Deletar
 */

 /**
  * Tipos de Parametros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisiçào, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL Server, 
 * NoSQL: MongoDB, CouchDB, etc...
*/

  app.post ('/users/:id', (request, response) => {

    const body = request.body;

    //const params = request.params;
    //const params = request.query;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Almeida'
    })
});

app.listen(3333);
