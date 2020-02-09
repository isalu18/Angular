import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    const myUser: User = this.userService.getUser();
    console.log(myUser);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
