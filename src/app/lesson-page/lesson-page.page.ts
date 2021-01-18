import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.page.html',
  styleUrls: ['./lesson-page.page.scss'],
})
export class LessonPagePage implements OnInit {

  constructor(private router:Router,
    private menu: MenuController) { }

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigate(["course-details"]);
  }

  toggleMenu() {
    // console.log("i am working")
    this.menu.enable(true, "menu-content")
    this.menu.open("menu-content")
  }
}
