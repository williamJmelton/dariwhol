import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.scss']
})
export class OpenAccountComponent implements OnInit {
  // firstName = '';
  // lastName = '';
  // email = '';
  // storeName = '';
  // storePhone = '';
  // cellPhone = '';
  // taxId = '';
  // street = '';
  // city = '';
  // state = '';
  // zip = '';

  // Hard coding values so i don't have to type it every time!!!
  firstName = 'Josh';
  lastName = 'Melton';
  email = 'williamjmelton617@gmail.com';
  storeName = 'Josh Mart';
  storePhone = '252-544-2779';
  cellPhone = '252-544-2779';
  taxId = '360009585';
  street = '1120 Thorpe Rd';
  city = 'Rocky Mount';
  state = 'North Carolina';
  zip = '27801';

  constructor(private _firebase: FirebaseService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('submitting form...');
    if (form.valid) {
      this._firebase.onFormSubmit(form.value);
    } else {
      // open a snackbar for the user to know they had errors
      this.openSnackBar('Please fix the errors', 'Dismiss');
    }
  }
  openSnackBar(string: string, duration: string) {
    this.snackBar.open(string, duration);
    console.log('this was written in fucking VIM');
  }
}
