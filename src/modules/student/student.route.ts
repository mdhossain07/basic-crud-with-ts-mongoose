import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/students', StudentControllers.createStudent);
router.get('/students/:id', StudentControllers.studentDetails);

export const studentRoutes = router;
