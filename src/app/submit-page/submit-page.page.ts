import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.page.html',
  styleUrls: ['./submit-page.page.scss'],
})
export class SubmitPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(["dashboard"]);
  }

}
