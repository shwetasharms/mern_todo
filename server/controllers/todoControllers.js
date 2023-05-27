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
exports.addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const post = new Todo({
            title, description,
        });
        const savedPost = await post.save();
        res.json({
            post: savedPost,
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};
exports.viewTodo = async (req, res) => {
    try {
        //extract todo items basis on id
        const id = req.params.id;
        return id
        const todo = await Todo.findById({ _id: id })

        //data forgiven id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found woth Given Id",
            })
        }
        //data for given id FOUND
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        })

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
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `Updated Successfully`,
        })

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
// exports.deleteTodo = async (req, res) => {
//     try {
//         const { id } = req.params.id;

//         await Todo.findByIdAndDelete(id);

//         res.json({
//             success: true,
//             message: "Todo DELETED",
//         })

//     }
//     catch (err) {
//         console.error(err);
//         res.status(500)
//             .json({
//                 success: false,
//                 error: err.message,
//                 message: 'Server Error',
//             });
//     }
// }
exports.deleteTodo = async (request, response) => {
    try {
        await Todo.deleteOne({ _id: request.params.id });
        response.status(201).json("User deleted Successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}