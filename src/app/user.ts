export class User {
  constructor(
    public login: string,
    public location: any,
    public avatar_url: any,
    public public_repo: string,
    public followers: string,
    public following: string,
    public email: string,
    public created_at: any

  ) { }
}

// export interface IUser {
//   username: string,
//   login: string,
//   location: any,
//   avatar_url: any,
//   public_repo: string,
//   followers: string,
//   following: string,
//   email: string,
//   created_at: any
//
// }
