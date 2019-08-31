import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
  user:User;
  repo: Repositories[];
  newrepo: Repositories[];
  constructor(private http:HttpClient) {
    this.user = new User("","",0,0,0);
    this.repo = [];
    this.newrepo = [];
   }
   gitRequest(searchName){
     interface ApiResponse{
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/"+searchName+"?access_token="+environment.apiUrl).toPromise().then(response=>{
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
   gitRepoRequest(searchNameR){
     interface ApiResponse{
       name:string;
       description:string;
     }
     let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+searchNameR+"/repos?access_token="+environment.apiUrl).toPromise().then(response=>{
        for(var i in response){
          if(searchNameR == 'Eliane-5'){
            this.repo.push(response[i]);
          }
          else{
            this.newrepo.push(response[i])
          }   
        }
        resolve();
      },error=>{
        this.user.login = "Please reload the page!";
        reject(error);
      })
     })
     return promise;
   }
}
