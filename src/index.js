import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import { connection } from './database'
import { PORT } from './config'

const app = express(); // Se inicializa el servidor
connection() // Ejecucion conexion DB

app.get('/', (req, res) => { res.send("Welcome") })

/* permite definir que es lo que puedo consultar a la API
export const schema = {}; */
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: { // objeto comun para todos los resolvers
    messageId: "test"
  }
}))

app.listen(PORT, () => console.log('Server on port ' + PORT))
