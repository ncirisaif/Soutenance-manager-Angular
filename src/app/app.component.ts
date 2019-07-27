import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./token-storage-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Soutenance';
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService,
              private router: Router) { }


  ngOnInit() {


    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        console.log(role);
        if (role === 'ROLE_ENSEIGNANT') {
          this.authority = 'enseignant';
          this.router.navigateByUrl('/enseignant');

          return false;
        } else if (role === 'ROLE_ETUDIANT') {
          this.authority = 'etudiant';
          this.router.navigateByUrl('/enseignant');

          return false;
        }
        this.authority = '';
        return true;
      });
    }


  }
  logout() {
    window.sessionStorage.clear();
    window.location.reload();
  }

}
