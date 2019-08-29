import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
  user:User;

  constructor(private http:HttpClient) {
    this.user = new User("","",0,0,0);
   }
   gitRequest(){
     interface ApiResponse{
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.user.login = response.login
         this.user.avatar_url = response.avatar_url
         this.user.followers = response.followers
         this.user.following = response.following
         this.user.public_repos = response.public_repos
         resolve()
       },
       error=>{
        this.user.login = "Please reload the page!"
        reject(error)
       })
     })
     return promise
   }
}
