import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  defaultChoose = "Advanced";

  user = {
    email: "",
    password: "",
    level: "",
  };
  submitted = false;

  onSubmit(form: NgForm) {
    console.log(this.signupForm.value);
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.level = this.signupForm.value.userData.level;
    this.signupForm.reset();
  }
}
