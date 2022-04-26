import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    id: String,
    owner: String,
})

var Project = mongoose.model('Project', projectSchema);

export default Project;