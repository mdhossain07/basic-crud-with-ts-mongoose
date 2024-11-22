import { Student } from './student.model';
import { IStudent } from './student.interface';

const createStudent = async (studentData: IStudent) => {
  return await Student.create(studentData);
};

const studentDetails = async (id: string) => {
  return await Student.findOne({ id });
};

export const StudentServices = { createStudent, studentDetails };
