import todosModels from "../models/todos.models.js";

// add todo 

const addTodo = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).json({ message: "Title And Description Is Required" });

    await todosModels.create({ title, description });
    res.status(201).json({ message: "Todo Added success in the db" });
};



export { addTodo };