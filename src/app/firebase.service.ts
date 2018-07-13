import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, take, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class FirebaseService {
  customers: Observable<any[]>;
  customerSubscription: any;
  taxIDs: Array<string>;
  constructor(private _db: AngularFirestore, private router: Router, private route: ActivatedRoute) {
    this.customers = _db.collection('newCustomers').valueChanges();
  }

  getCustomers(): Observable<any[]> {
    return this.customers;
  }

  redirect(mode: string) {
    console.log('re-directing....');
    this.router.navigate([`form-result`, mode], { relativeTo: this.route });
    this.customerSubscription.unsubscribe();
  }

  onFormSubmit(data: any) {
    ////////////////////////////////////////////////////////////////////////////////////
    // here we morph the old object data from the form into the new data that we send //
    // to firebase.                                                                   //
    ////////////////////////////////////////////////////////////////////////////////////
    const object = {
      storeName: data.storeName,
      firstName: data.firstName,
      lastName: data.lastName,
      storePhone: data.storePhone,
      cellPhone: data.cellPhone,
      email: data.email,
      taxId: data.taxId,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip
      }
    };
    this.customerSubscription = this.customers.pipe(
      map(customers => {
        return customers.map(customer => {
          return customer.taxId; // mapped twice so we could get only the taxIDs
        });
      }),
      take(1)
    ).subscribe(
      ids => {
        this.taxIDs = ids;
      },
      error => {
        console.log(error);
      },
      () => {
        // do complete function here.
        let done = false;
        if (this.taxIDs.length === 0) {
          this._db.collection('newCustomers').add(object)
            .then(function() {
              console.log('Document successfully written!'); // document was written.
              done = true;
              return;
            })
            .catch(function(error) {
              console.error('Error writing document: ', error); // something went wrong here
            });
        }

        // go thru the stored data and make sure the taxID isn't duplicate.
        if (!done) {
          for (let i = 0; i < this.taxIDs.length; i++) {
            if (this.taxIDs[i] === object.taxId) { // iterate thru the data and test each logged ID with the subbmitted one
              console.log('customer already exists'); // if here then we know the customer already exists
              done = true;
              this.redirect('exists'); // so, send they ass back to the home page & unsubscribe from this!!
              return;
            }
          }
        }
        // here we very simply send the form out to firebase for safe storage.
        if (!done) {
          this._db.collection('newCustomers').add(object)
            .then(function() {
              console.log('Document successfully written!'); // document was written.
              return;
            })
            .catch(function(error) {
              console.error('Error writing document: ', error); // something went wrong here
            });
          this.redirect('confirm');
        }
      });
  }
}
