import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const student = await StudentServices.createStudent(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully.',
      data: student,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Student created failed.',
      data: err,
    });
  }
};

const studentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id', id);

    const student = await StudentServices.studentDetails(id);
    return res.status(200).json({
      success: true,
      message: 'Student details successfully.',
      data: student,
    });
  } catch (error) {
    console.log('Error:', error);
  }
};

export const StudentControllers = { createStudent, studentDetails };
