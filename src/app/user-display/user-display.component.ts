import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { GitRequestService } from '../git-http/git-request.service';
import { Repositories } from '../repositories';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  user:User;
  repos: Repositories[];
  constructor(private gitService:GitRequestService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    let parameter = this.route.snapshot.paramMap.get('name');
    console.log(parameter)
    this.gitService.gitRequest(parameter);
    this.gitService.gitRepoRequest(parameter);
    this.user = this.gitService.user;
    this.repos = this.gitService.newrepo;
  }
}