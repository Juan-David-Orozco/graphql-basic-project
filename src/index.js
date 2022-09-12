import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express(); // Se inicializa el servidor

app.get('/', (req, res) => { res.send("Welcome") })

/* permite definir que es lo que puedo consultar a la API 
export const schema = {}; */
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}))

app.listen(3000, () => console.log('Server on port 3000'))
