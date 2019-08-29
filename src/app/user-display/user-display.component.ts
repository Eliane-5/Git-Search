import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { GitRequestService } from '../git-http/git-request.service';
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  user:User;
  constructor(private gitService:GitRequestService) { }

  ngOnInit() {
    this.gitService.gitRequest()
    this.user = this.gitService.user 
  }

}