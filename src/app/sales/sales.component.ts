import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
}
  ngOnInit() {
    this.isHandset.subscribe(value => {
      if(value.matches === true) {
        // this won't work untill I upload the site to the server, IDT at least....
        // this.router.navigateByUrl('/src/assets/june.pdf');
        console.log('WE OUTTA HERE');
        // window.open('http://localhost:4200/assets/june.pdf', '_system');
      }
    });
  }

}
