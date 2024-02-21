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
  year: number;
  active: boolean;
  max_request: number;
  laboratories: Laboratory[];
}

export interface Laboratory {
  id: number;
  university: string;
  department: string;
  course: string;
  field: string;
  major: string;
  order: number;
  teachers: Teacher[];
  users: LaboratoryUser[];
}

export interface Teacher {
  id: number;
  name: string;
  position: string;
  order: number;
}

export interface LaboratoryUser {
  rank: number;
  gpa: number;
}
