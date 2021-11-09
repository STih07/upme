import { Component, OnInit } from '@angular/core';
import { RecruitmentsService, UserInfoService } from 'src/app/core/api/services';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private userInfoService: UserInfoService,
    private recruitments: RecruitmentsService
  ) { }

  ngOnInit(): void {
    this.recruitments.getAllRecruitmentsUsingGET().subscribe(console.log);
    // this.userInfoService.getUsersInfoUsingGET().subscribe(console.log);
  }

}
