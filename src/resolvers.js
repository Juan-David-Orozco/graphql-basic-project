import { tasks } from './sample'

import User from './models/User'

/* Se crean funciones encapsuladas en un objeto que se
encargan de retornar una respuesta despues de la consulta */
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with graphQL"
    },
    greet(root, { name }, ctx) {
      console.log(ctx)
      return `Hello! ${name}`
    },
    tasks() {
      return tasks
    },
    async users() {
      const users = await User.find()
      return users
    }
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length
      tasks.push(input)
      return input
    },
    async createUser(_, { input }) {
      const newUser = new User(input)
      await newUser.save()
      return newUser
    },
    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id)
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id,input,{new: true})
    }
  }
}