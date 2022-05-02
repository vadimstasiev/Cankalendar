import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    projectId: String,
    owner: String,
})

var Project = mongoose.model('Project', projectSchema);

export default Project;