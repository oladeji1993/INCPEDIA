import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.page.html',
  styleUrls: ['./payment-page.page.scss'],
})
export class PaymentPagePage implements OnInit {

  constructor(private router:Router,
    private menu: MenuController) { }

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigate(["dashboard"]);
  }

  goToAddCard(){
    this.router.navigate(["add-card-page"]);
  }

  toggleMenu() {
    // console.log("i am working")
    this.menu.enable(true, "menu-content")
    this.menu.open("menu-content")
  }

}
