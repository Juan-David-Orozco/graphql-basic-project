import express from 'express';
import graphqlHTTP from 'express-graphql'

const app = express();

app.use('/graphql', graphqlHTTP({
  
}))

app.get('/', (req, res) => { res.send("Welcome") })

app.listen(3000, () => console.log('Server on port 3000'))
