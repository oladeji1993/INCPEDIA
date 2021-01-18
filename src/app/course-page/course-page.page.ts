import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.page.html',
  styleUrls: ['./course-page.page.scss'],
})
export class CoursePagePage implements OnInit {

  constructor(private router:Router,
    private menu: MenuController) { }

  ngOnInit() {
  }

  
  goToDashboard(){
    this.router.navigate(["dashboard"]);
  }

  goToDetails(){
    this.router.navigate(["course-details"]);
  }

  toggleMenu() {
    // console.log("i am working")
    this.menu.enable(true, "menu-content")
    this.menu.open("menu-content")
  }

}
