import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router:Router,
    private menu: MenuController) { }

  ngOnInit() {
  }

  goToPayment(){
    this.router.navigate(["payment-page"]);
  }

  toggleMenu() {
    // console.log("i am working")
    this.menu.enable(true, "menu-content")
    this.menu.open("menu-content")
  }

}
