import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    projectId: String,
    column: Number,
    order: Number,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    dueDate: {
        type: Date,
        default: new Date(),
    },
    showOnKanban: Boolean
})

var Task = mongoose.model('Task', taskSchema);

export default Task;