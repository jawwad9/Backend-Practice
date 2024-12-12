import Course from "../models/course.model.js"


const addCourse = async (req, res) => {
    const { name, duration } = req.body;

    if (!name) return res.status(400).json({ message: "name is required" });

    const course = await Course.create({ name, duration });
    res.json({
        message: "Course created successfully",
    })
}

export { addCourse };