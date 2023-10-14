import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.name = queryParams['name'];
      //console.log(queryParams);
    });
  }

  goToSignUp(): void {
    this.router.navigate(['/auth/signup']);
  }

  // goToBookDetails(): void{
  //   this.router
  //   .navigate(['/public/book-details',40]);
  // }

  goToBookDetails(id: number): void {
    this.router.navigate(['/public/book-details', id], {
      queryParams: { name: 'Ali' },
    });
  }
  
}
