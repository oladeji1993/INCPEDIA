import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-page',
  templateUrl: './assignment-page.page.html',
  styleUrls: ['./assignment-page.page.scss'],
})
export class AssignmentPagePage implements OnInit {

  constructor(private router: Router,
    ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(["dashboard"]);
  }

  goToAddCard(){
    this.router.navigate(["add-card-page"]);
  }

  submit(){
    this.router.navigate(["submit-page"]);
  }


}
