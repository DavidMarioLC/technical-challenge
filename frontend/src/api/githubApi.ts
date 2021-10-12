import {IUser} from "../interfaces/user.interface" ;
import {IRepository} from '../interfaces/repository.interface';

interface Response{
    user:IUser;
    repositories:IRepository[];
    userExist:Boolean;
}


export const fetchGithubApi =async (username:string):Promise<Response> => {
  const API_URL:string ="https://api.github.com/users";

  const ENDPOINT_USER:string = `${API_URL}/${username}`;
  const ENDPOINT_REPOS:string =`${API_URL}/${username}/repos`;

  const [responseUser,responseUserRepos] = await Promise.all([fetch(ENDPOINT_USER),fetch(ENDPOINT_REPOS)]);
  
  const userExist = responseUser.ok;
  const user = await responseUser.json();
  const repositories = await responseUserRepos.json();
  
  if(userExist) {
    return {user,repositories,userExist}
  }else{
    return {user,repositories,userExist}
  }
  
  
}

