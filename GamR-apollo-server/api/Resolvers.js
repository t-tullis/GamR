const PostModel = require("../models/PostModel")

const resolvers = {
    Query: {
		getPost:  _id => PostModel.getPost(_id),

		getPosts: () => PostModel.getPosts()
	},

	Mutation: {
		createPost: (_, args) => PostModel.createPost(args),

		deletePost: (_, args) => PostModel.deletePost(args),

		updatePost: (_, args) => PostModel.updatePost(args)
	}
}

module.exports = resolvers