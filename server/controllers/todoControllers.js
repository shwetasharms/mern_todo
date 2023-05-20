const Todo = require("../model/todoModel");
exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "Entire Todo Data is fetched",
            });
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: 'Server Error',
            });

    }
}
// exports.createPost = async (req, res) => {
//     try {
//         const { title, body } = req.body;
//         const post = new Post({
//             title, body,
//         });
//         const savedPost = await post.save();
//         res.json({
//             post: savedPost,
//         });
//     }
//     catch (error) {
//         return res.status(400).json({
//             error: "Error while creating post",
//         });
//     }
// };
//need some more testing after completing like wala controleer
// exports.getTodo = async (req, res) => {
//     try {
//         const posts = await Post.find().populate("likes").populate("comments").exec();
//         res.json({
//             posts,
//         })
//     }
//     catch (error) {
//         return res.status(400).json({
//             error: "Error while fetching post",
//         });
//     }
// }