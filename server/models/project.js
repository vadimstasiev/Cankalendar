import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    id: String,
    name: String,
})

var Project = mongoose.model('Project', projectSchema);

export default Project;