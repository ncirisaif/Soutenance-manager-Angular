export class SignupUser {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public role: string,
    public niveau: string,
    public specialite: string



  ) {}
}
