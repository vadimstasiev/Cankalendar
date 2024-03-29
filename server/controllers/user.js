import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuid } from 'uuid';

import UserModal from "../models/user.js";
import Project from '../models/project.js';


const secret = '9W2!8uAL[]sQD6pZ';

const sessionExpiresIn = "3h"

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, secret, { expiresIn: sessionExpiresIn });

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
      guest: [], 
    }

    const result = await UserModal.create({ email, password: hashedPassword, name, projects });

    const token = jwt.sign( { email: result.email, id: result.id }, secret, { expiresIn: sessionExpiresIn } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const createProject = async (req, res) => {
  const { userEmail, projectName } = req.body;
  const newProject = { name: projectName, id: uuid() }

  const filter = { email: userEmail }

  try {
    
    // add project to project.owner in user
    
    const user = await UserModal.findOne(filter);
    if (!user) return res.status(400).json({ message: "User email does not exist" });
    
    await UserModal.findOneAndUpdate(filter, {projects: {...user.projects, owner: [...user.projects.owner, newProject]}});

    // // add project to projects table

    Project.create({projectId: newProject.id, owner: userEmail});


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
    const existingProject = await Project.findOne({ projectId: projectId });

    if (!existingProject) return res.status(400).json({ message: "Project does not exist" });

    const user = await UserModal.findOne(filter);

    if (!user) return res.status(400).json({ message: "User email does not exist" });

    //check if user owns it
    if (user.projects.owner.filter(prj=> projectId === prj.id).length>0) return res.status(400).json({ message: "User is owner of the project" });

    //check if user already in it

    if (user.projects.guest.filter(prj=> projectId === prj.id).length>0) return res.status(400).json({ message: "User has already joined this project" });


    const projectName = getProjectNameFromId(projectId)

    await UserModal.findOneAndUpdate(filter, {projects: {...user.projects, guest: [...user.projects.guest, {id: projectId, name: projectName}]}});

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

  const filter = { email: userEmail }

  try {
    const user = await UserModal.findOne(filter);

    if (!user) return res.status(400).json({ message: "User email does not exist" });

    // must get the list of projects in which user is guest TODO
    
    const guestListWithNames = await Promise.all(user.projects.guest.map(async proj => {
      //// get owner
      const projectName = await getProjectNameFromId(proj.id)
      return {id: proj.id, name: projectName}
    }))



    // res.status(201).json({ result: user });
    // console.log("user", {...user, projects: {...user.projects, guest: guestListWithNames}})
    await UserModal.findOneAndUpdate(filter, {projects: {...user.projects, guest: guestListWithNames}});
    
    const result = await UserModal.findOne(filter);

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

const getProjectNameFromId = async (projectId) => {
  //// find id in projects 
  const projectInfo = await Project.findOne({ projectId: projectId })
  //// get owner
  const owner = await UserModal.findOne({email: projectInfo.owner});
  //// find project name from owners projects
  return owner.projects.owner.filter(project => project.id === projectId)[0].name
}