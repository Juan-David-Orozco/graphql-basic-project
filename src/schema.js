import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

/* primero se define una const con el tipo de datos
que se pueden consultar */
// Definicion de tipos
const typeDefs = `

  type Query {
    hello: String
  }

`;

/* Se une al concepto de "Resolver" que indica lo
que podemos hacer cuando consulte algo */

/* El metodo importado de graphql-tools se utiliza para 
unir los typeDefs y los resolvers en un nuevo Schema */
export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})
