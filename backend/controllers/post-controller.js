
import Post from '../models/post.js';


export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

       return response.status(200).json('Post saved successfully');
    } catch (error) {
       return  response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        const { _id } = request.body;  // Access id from the body
    
        // Find the post by id
        const post = await Post.findById(_id);  // Use the id from the body

       
        if (!post) {
            return response.status(404).json({ msg: 'Post not found' });
        }
        
        await Post.findByIdAndUpdate( _id, { $set: request.body });
        // $addtoset hota hai append karne ke liye

        response.status(200).json({ msg: 'Post updated successfully', isSuccess: true });
    } catch (error) {
        response.status(500).json({ msg: 'Error updating post', error });
    }
};



export const deletePost = async (request, response) => {
    try {
        const { id } = request.body;  // Access id from the body
        
         // Find the post by id
         const post = await Post.findById(id);  // Use the id from the body
           
        
        await post.deleteOne();
         
        response.status(200).json('post deleted successfully');
    } catch (error) {
       
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    try {
        const { id } = request.body;  // Access id from the body

        // Find the post by id
        const post = await Post.findById(id);  // Use the id from the body

       
        if (!post) {
            return response.status(404).json({ message: 'Post not found' });
        }

        response.status(200).json(post);  // Return the post data
    } catch (error) {
        // console.error(error);
        response.status(500).json({ message: 'Error retrieving post', error });
    }
};

export const getAllPosts = async (request, response) => {
    // let username = request.query.username;
    // let category = request.query.category;
    let posts;
    try {
        // if(username) 
        //     //only  user data
        //     posts = await Post.find({ username: username });
        // else if (category) 
        //     //category wise
        //     posts = await Post.find({ categories: category });
        // else 
        //all post
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}