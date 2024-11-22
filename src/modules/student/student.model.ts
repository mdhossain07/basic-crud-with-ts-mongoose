import { Schema, model } from 'mongoose';
import {
  IAddress,
  IGuardian,
  ILocalGuardian,
  IStudent,
  IStudentName,
} from './student.interface';

const studentNameSchema = new Schema<IStudentName>({
  firstName: {
    type: String,
    required: [true, 'firstName is required'],
    maxlength: [20, 'firstName can not be more than 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const capitalizeName = value.charAt(0).toUpperCase() + value.slice(1);
        return capitalizeName === value;
      },
      message: `{VALUE} is not in capitalize format`,
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<IAddress>({
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String },
});

const guardianSchema = new Schema<IGuardian>({
  fathersName: { type: String, required: true },
  fathersOccupation: { type: String },
  mothersName: { type: String, required: true },
  mothersOccupation: { type: String },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  occupation: { type: String },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String, unique: true, required: true },
  name: {
    type: studentNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: `{VALUE} is not assignable 'male' or 'female' type`,
    },
  },
  email: { type: String, unique: true, required: [true, 'Email is required'] },
  contact: { type: String, required: [true, 'Contact is required'] },
  dateOfBirth: { type: Date, default: Date.now },
  address: addressSchema,
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'O+', 'O-', 'AB+', 'AB-'],
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

export const Student = model<IStudent>('Student', studentSchema);
