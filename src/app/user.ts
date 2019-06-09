export class User {
  constructor(public login: string,
    public location: any,
    public avatar_url: any,
    public public_repo: number,
    public followers: number,
    public following: number,
    public email: string,
    public created_at: any

  ) { }
}

export interface IUser {
  location: any,
  avatar_url: any,
  public_repo: number,
  followers: number,
  following: number,
  email: string,
  created_at: any

}
