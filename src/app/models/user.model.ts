export class User {
  mobile_number: string;
  name: string;
  position: string;
  address: string;
  email: string;
  profile_picture: string;
  description?: string;
  github_repo_url: string

  [key: string]: string | any
}
