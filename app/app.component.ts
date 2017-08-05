import { Component } from "@angular/core";
import { User } from "./shared/user/user";

// @ TypeScript decorator, allows you to annotate a TypeScript class or method w/additional info (like adding metadata)
@Component({
  selector: "my-app",
  template: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class AppComponent {
  user: User;
  isLoggingIn = true;
  constructor() {
    this.user = new User();
  }
  submit() {
    alert("You’re using: " + this.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
