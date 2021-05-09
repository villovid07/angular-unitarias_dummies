import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myvar = "hola mundo";
  saludo = "hola jhonatan care verga";
  users: User[] = []

  constructor(private userService: UserService){
    
  }


  ngOnInit(): void {
    this.getUsers();
  };
  
  par(numero:number): boolean {
      return numero%2==0?true:false;
  }




  getUsers(){
    this.userService.getAll().subscribe(users=>{
      this.users = users;
      console.log(this.users);
    })
  }
  
}
