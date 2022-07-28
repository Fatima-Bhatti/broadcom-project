import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '../active-users.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
  tableData: IUser[] = [];
  modeldata:any;
  activeUserCount!: number;

  constructor(protected activeUserService:ActiveUsersService) { 

    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  

  getAllUsers() {
    this.activeUserService.getAllUser().subscribe((data: any) => {
      this.activeUserCount = data['activeUsers'].length;
    })
  }
  
}
