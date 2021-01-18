import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card-page',
  templateUrl: './add-card-page.page.html',
  styleUrls: ['./add-card-page.page.scss'],
})
export class AddCardPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(["payment-page"]);
  }

  goToSuccessPage(){
    this.router.navigate(["payment-success-page"]);
  }


}
