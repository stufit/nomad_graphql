import {ApolloServer, gql} from 'apollo-server';

// gql에는 '' 이 아닌 `` 로 type을 적어줘야함(gql SDL)
const typeDefs = gql`
    type Query {
        allTweets: Int
    }
`;

const server = new ApolloServer({typeDefs})
server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
})

