import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuid } from 'uuid';

import UserModal from "../models/user.js";
import Project from '../models/project.js';


const secret = '9W2!8uAL[]sQD6pZ';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const personProjectUUID = uuid()

    const projects = {
      owner: [{name: "Personal" , id: personProjectUUID}], 
      guest: [], // [...ids]
    }

    const result = await UserModal.create({ email, password: hashedPassword, name, projects });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const createProject = async (req, res) => {
  const { userEmail, projectName } = req.body;
  const newProject = { id: uuid(), name: projectName }

  const filter = { email: userEmail }

  try {
    
    // add project to project.owner in user
    
    const user = await UserModal.findOne(filter);
    if (!user) return res.status(400).json({ message: "User email does not exist" });
    
    await UserModal.findByIdAndUpdate(filter, {projects: {...user.projects, owner: [...user.projects.owner, newProject]}});

    // add project to projects table

    const existingProject = await Project.create(newProject);


    // return updated user object

    const result = await UserModal.findOne(filter);

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const joinProject = async (req, res) => {
  const { projectId, userEmail } = req.body;

  const filter = { email: userEmail }

  try {
    const existingProject = await Project.findOne({ id: projectId });

    if (!existingProject) return res.status(400).json({ message: "Project does not exist" });

    const user = await UserModal.findOne(filter);

    if (!user) return res.status(400).json({ message: "User email does not exist" });

    await UserModal.findByIdAndUpdate(filter, {projects: {...user.projects, guest: [...user.projects.guest, projectId]}});

    // return updated user object
    
    const result = await UserModal.findOne(filter);

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const getProjectList = async (req, res) => {
  const { userEmail } = req.body;

  console.log(userEmail)
  const filter = { email: userEmail }

  try {
    const user = await UserModal.findOne(filter);

    if (!user) return res.status(400).json({ message: "User email does not exist" });

    console.log({user})
    res.status(201).json({ result: user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};