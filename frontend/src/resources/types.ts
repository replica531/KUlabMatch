export interface Laboratory {
  id: number;
  department: string;
  field: string;
  major: string;
}

export interface User {
  id: number;
  affiliation: string;
  grade: number;
  gpa: number;
  admin: boolean;
}
