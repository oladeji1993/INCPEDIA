import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success-page',
  templateUrl: './payment-success-page.page.html',
  styleUrls: ['./payment-success-page.page.scss'],
})
export class PaymentSuccessPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  goHome(){
    this.router.navigate(["dashboard"]);
  }

}
