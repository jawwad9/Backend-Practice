import Todo from "../controllers/todo.controllers.js";

// add todo 
const addTodo = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).json({ message: "Title And Description Is Required"});

    await Todo.create({ title, description });
    res.status(201).json({ message: "Todo Added success in the db" });
};


export { addTodo };