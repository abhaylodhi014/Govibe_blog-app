
import  Comment  from "../models/comment.js";


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getComments = async (request, response) => {
    try {
        const { id } = request.query;  // Get 'id' from query params
      
        if (!id) {
            return response.status(400).json({ message: 'Post ID is missing' });
        }
        const comments = await Comment.find({ postId: id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error);
    }
};
export const deleteComment = async (request, response) => {
    try {
         const { id } = request.body; // Get 'id' from query params
      
        if (!id) {
            return response.status(400).json({ message: 'Post ID is missing' });
        }

        const comment = await Comment.findById(id);
        await comment.deleteOne()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
export const updateComment = async (request, response) => {
    try {
     
        const { id } = request.body; // Get 'id' from query params
      
        if (!id) {
            return response.status(400).json({ message: 'Post ID is missing' });
        }

        const comment = await Comment.findById(id);  
       
        if (!comment) {
            return response.status(404).json({ msg: 'Post not found' });
        }
        
        const updatedComment = await Comment.findByIdAndUpdate(id, { comments: request.body.comments }, { new: true });
        // $addtoset hota hai append karne ke liye
      response.status(200).json(updatedComment);
    } catch (error) {
      response.status(500).json(error);
    }
  };