import { Component, OnInit } from '@angular/core';
import {SignupUser} from '../../signup-user';
import {SignService} from '../../sign.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../token-storage-service';

@Component({
  selector: 'app-role-selecter',
  templateUrl: './role-selector.component.html',
  styleUrls: ['./role-selector.component.css']
})
export class RoleSelectorComponent implements OnInit {
  rol: any = [
    {id: 'ETUDIANT', value: 'ETUDIANT'},
    {id: 'ENSEIGNANT', value: 'ENSEIGNANT'}
  ];
  private roles: Array<string> = [];


  signupUser = new SignupUser('', '', '', '', '', '' , '');
  private token: string;
  private id: string;



  constructor(private signService: SignService,
              private route: ActivatedRoute,
              private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit() {

    this.token = this.route.snapshot.queryParamMap.get('token');
    this.route.queryParamMap.subscribe(queryParams => {
      this.token = queryParams.get('token'); });

    if (this.token) {
      this.tokenStorageService.saveToken(this.token);
    } else {
      console.log('token does not exit');
    }


    if ((this.tokenStorageService.getAuthoritiesFromToken(this.token).length > 0)) {
      this.tokenStorageService.saveAuthorities(this.tokenStorageService.getAuthoritiesFromToken(this.token));

      this.router.navigateByUrl('/user/test');
    }

  }



  onValidate() {
    this.id = this.tokenStorageService.getId();

    this.signupUser.id = this.id;
    this.signService.validateRole(this.signupUser).subscribe(
       (responce) => {
         if (true) {
           this.roles.push(this.signupUser.role);
           this.tokenStorageService.saveAuthorities(this.roles);

           this.router.navigateByUrl('/user/test');
         }
       });

         }
  logout() {
    window.sessionStorage.clear();
    window.location.reload();
  }



}
