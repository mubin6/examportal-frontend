export interface Login {
  username: string;
  password: string;
}

export interface RegistrationDto{
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  profile?: string;
  phone: string;
}

export interface CategoryDto {
  cid?: string;
  title: string;
  description: string;
}

export interface QuizDto {
  active: boolean;
  category: CategoryDto;
  description: string;
  maxMarks: string;
  numberOfQuestions: string;
  qid: number;
  title: string;
}
