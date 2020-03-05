type Person{
    id: ID!
    name: String!
    age: Int!
    posts: [Post!]
}

type Post{
    title: String!
    author: Person!
}

type Query{
    allPersons(last: Int): [Person!]!
    allPosts(last: Int): [Post!]!
}

type Mutation {
    createPerson(name: String!, age: String!): Person!
    updatePerson(id: ID!, name: String!, age: String!): Person!
    deletePerson(id: ID!): Person!
    createPost(title: String!): Post!
    updatePost(id: ID!, title: String!): Post!
    deletePost(id: ID!): Post!
}

type Subscription {
    newPerson: Person!
    updatedPerson: Person!
    deletedPerson: Person!
    newPost: Post!
    updatedPost: Post!
    deletedPost: Post!
}
