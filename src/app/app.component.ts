import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Submitted:boolean;
  RegisterForm = new FormGroup({
  Fname:  new FormControl('',Validators.required),
  Lname: new FormControl('',Validators.required)})
   updateProfile() {
    this.RegisterForm.setValue({Fname: 'Megha',Lname: 'Shelar'})
  }

}
