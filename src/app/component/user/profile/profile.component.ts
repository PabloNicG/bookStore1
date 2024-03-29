import { UserInterface } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private authService: AuthService) { }
  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
    roles: {}
  };
  public providerId: string = 'null';

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    })
  }
  /*En este bloque de codigo lo que se hace es darle la oportunidad al usuario para que vea su nombre, email y foto de perfil.*/

}
