/* Se crean funciones encapsuladas en un objeto que se
encargan de retornar una respuesta despues de la consuta */
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with graphQL"
    }
  }
}