import express from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controllers/post-controller.js';
import { uploadImage } from '../controllers/image-controller.js';
import { newComment, getComments, deleteComment , updateComment } from '../controllers/comment-controller.js';
import {loginUser, signupUser ,authGoogle} from '../controllers/user-controller.js';
import { authenticateToken, createNewToken } from '../controllers/jwt-controller.js';
import { newContactUs } from '../controllers/contactUs-controller.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);



router.post('/token', createNewToken);


router.post('/create', authenticateToken, createPost);

router.put('/update', authenticateToken, updatePost);

router.delete('/delete', authenticateToken, deletePost);

router.post('/post',  getPost);

router.get('/posts', getAllPosts);

router.post('/file/upload', upload.single("file"), uploadImage);


router.post('/comment/new', authenticateToken, newComment);

router.get('/comments', authenticateToken, getComments);
router.delete('/comment/delete', authenticateToken, deleteComment);
router.put('/comment/edit', authenticateToken, updateComment);

router.post('/google-auth' , authGoogle);
router.post('/contactUs' , newContactUs);
export default router;