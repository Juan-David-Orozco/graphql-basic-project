import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'


/* Primero se define una const con el tipo de datos
que se pueden consultar */
// Definicion de tipos
const typeDefs = `

  type Query {
    hello: String
    greet(name: String!): String
    tasks: [Task]
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type Mutation {
    createTask(input: TaskInput): Task
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

`;
// Query: Genera consultas al servidor
// Mutation: Genera cambios en el servidor
// Se pueden definir tipos de datos personalizados (Task)

/* Se une al concepto de "Resolver" que indica lo
que podemos hacer cuando consulte algo */

/* El metodo importado de graphql-tools se utiliza para 
unir los typeDefs y los resolvers en un nuevo Schema */
export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})
