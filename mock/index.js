
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from "@faker-js/faker/locale/zh_CN"

const typeDefs = `#graphql
  type Query {
    hello: String
    resolved: String
  }

  type UserType {
    id: String!
    name: String!
    desc: String!

    """帐户信息"""
    account: String!
  }

  type Query {
    """根据id查询用户信息"""
    find(id: String!): UserType!
  }

  type Mutation {
    """新增用户"""
    create(params: UserInput!): Boolean!

    """根据id更新用户信息"""
    update(id: String!, params: UserInput!): Boolean!

    """根据id删除用户信息"""
    del(id: String!): Boolean!
  }

  input UserInput {
    name: String!
    desc: String!
  }
`;

const resolvers = {
  Query: {
    resolved: () => 'Resolved',
  },
  UserType: {
    // name: () => faker.name.fullName()
    name: () => faker.person.fullName(),
    desc:()=>faker.location.city()
  }
};


const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => "hello"
};


const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true
  }),
});

const { url } = await startStandaloneServer(server, { listen: { port: 8888 } });

console.log(`🚀 Server listening at: ${url}`);