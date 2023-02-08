import PostMessage from "../models/postMessage.js";

const getPosts = async(req, res)=>{
    try{
        const allPosts = await PostMessage.find();
        res.status(200).json(allPosts);
    } catch(err){
        res.status(404).json({ message: err.message });
    }
}

const createPost = async(req, res)=>{
    const post = req.body;
    try{
       const newPost = PostMessage(post);
       await newPost.save();
       res.status(201).send();
    } catch(err){
        res.status(400).json({ message: err.message });
    }
}

export { getPosts, createPost }