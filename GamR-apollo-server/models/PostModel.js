const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/GamR", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const Schema = mongoose.Schema

const postSchema = new Schema({
    post: String,
    author: String,
})

const PostModel = mongoose.model("Post", postSchema)

module.exports = {
	getPosts: () => PostModel.find().sort({ _id: -1 }),
	getPost: ( _id) => PostModel.findOne({ _id }),
	createPost: (args) => PostModel(args).save(),
	deletePost: (args) => {
		const { _id } = args

		PostModel.remove({ _id }, error => {
			if (error) {
				console.log("Error Removing: ", error)
			}
		})

		return args
	},
	updatePost: (args) => {
		const { _id, post } = args

		PostModel.update({ _id },{$set: { post }},
			{ upsert: true },
			error => {
				if (error) {
					console.log("Error Updating: ", error)
				}
			}
		)

		return args
	}
}
