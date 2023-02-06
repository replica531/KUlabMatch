export interface User {
  id: number;
  affiliation: number;
  grade: number;
  gpa: number;
  admin: boolean;
  laboratories: LaboratoryUser[];
}

export interface Survey {
  id: number;
  name: string;
  max_request: number;
  laboratories: Laboratory[];
}

export interface Laboratory {
  id: number;
  university: string;
  department: string;
  field: string;
  major: string;
  teachers: Teacher[];
  users: LaboratoryUser[];
}

export interface Teacher {
  id: number;
  name: string;
  position: string;
}

export interface LaboratoryUser {
  rank: number;
  gpa: number;
}
