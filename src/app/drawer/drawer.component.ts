import { Component } from '@angular/core';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {

openNav() {
  document.getElementById("mySidenav")!.style.width = "250px";
}

closeNav() {
  document.getElementById("mySidenav")!.style.width = "0";
}
}
