import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserSearch } from '../user-search';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GitRequestService } from '../git-http/git-request.service';
import { User } from '../user-class/user';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  user:User;
  newRepos:Repositories[];
  public searchMe = 'Eliane-5'
  searchInfo = new UserSearch('');
  @Output() getName = new EventEmitter<UserSearch>();

  searchFor(data){
    location.reload();
    this.router.navigate(['/display',data])
  }

  constructor(private gitService:GitRequestService,private router:Router, private location: Location) { }

  ngOnInit() {
    this.gitService.gitRequest(this.searchMe);
    this.gitService.gitRepoRequest(this.searchMe);
    this.user = this.gitService.user;
    this.newRepos = this.gitService.repo;
  }

}
