import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    dueDate: {
        type: Date,
        default: new Date(),
    }
})

var Task = mongoose.model('Task', taskSchema);

export default Task;