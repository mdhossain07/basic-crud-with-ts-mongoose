export interface IStudentName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IAddress {
  presentAddress: string;
  permanentAddress: string;
}

export interface IGuardian {
  fathersName: string;
  fathersOccupation: string;
  mothersName: string;
  mothersOccupation: string;
}

export interface ILocalGuardian {
  name: string;
  contact: string;
  occupation: string;
}

export interface IStudent {
  id: string;
  name: IStudentName;
  gender: 'male' | 'female';
  email: string;
  contact: string;
  dateOfBirth: Date;
  address: IAddress;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'O+' | 'O-' | 'AB+' | 'AB-';
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
}
