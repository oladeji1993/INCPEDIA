import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {

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

  goToLesson(){
    this.router.navigate(["lesson-page"]);
  }

  toggleMenu() {
    // console.log("i am working")
    this.menu.enable(true, "menu-content")
    this.menu.open("menu-content")
  }

}
