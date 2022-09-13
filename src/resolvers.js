import { tasks } from './sample'

/* Se crean funciones encapsuladas en un objeto que se
encargan de retornar una respuesta despues de la consuta */
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with graphQL"
    },
    greet(root, { name }) {
      //console.log(args.name)
      return `Hello! ${name}`
    },
    tasks() {
      return tasks
    }
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length
      tasks.push(input)
      return input
    }
  }
}