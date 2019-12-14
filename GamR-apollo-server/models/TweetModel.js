const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/GamR", {
    useNewUrlParser: true
})

const Schema = mongoose.Schema

const postSchema = new Schema({
    message: String,
    author: String,
})

const PostModel = mongoose.model("Post", postSchema)

export default {
	getPosts: () => PostModel.find().sort({ _id: -1 }),
	getTpost: ( _id) => PostModel.findOne({ _id }),
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
	updateTweet: (args) => {
		const { _id, post } = args

		PostModel.update(
			{ _id },
			{
				$set: { post }
			},
			{ upsert: true },
			error => {
				if (error) {
					console.log("Error Updating: ", error)
				}
			}
		)

		args.author = "User123" // temporary user

		return args
	}
}