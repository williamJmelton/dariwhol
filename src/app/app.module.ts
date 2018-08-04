import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


// Firebase Imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Component Imports
import { OpenAccountComponent } from './open-account/open-account.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SalesComponent } from './sales/sales.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';

// Service Imports
import {FirebaseService} from './firebase.service';
import { HomeComponent } from './home/home.component';

// PDF Viewer Import
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Angular material Imports
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormResultComponent } from './form-result/form-result.component';
import {MatCardModule} from '@angular/material/card';

// Other Imports
import { SlickModule } from 'ngx-slick';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    OpenAccountComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    FormResultComponent,
    SalesComponent,
    MailingListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    FormsModule,
    MatCardModule,
    SlickModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    PdfViewerModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
