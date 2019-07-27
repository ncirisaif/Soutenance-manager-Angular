import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, FormsModule, NgForm, Validators} from '@angular/forms';
import { User } from '../user';
import { SignService } from '../sign.service';
import { ActivatedRoute, Router } from '@angular/router';
import {SignupUser} from "../signup-user";
import {TokenStorageService} from "../token-storage-service";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {HttpErrorResponse} from "@angular/common/http";


declare var $: any;


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  rol: any = [
    {"id":"ETUDIANT","value":"ETUDIANT"},
    {"id":"ENSEIGNANT","value":"ENSEIGNANT"}
    ];

  userSignUpModel = new SignupUser('','','','','','');
  userModel = new User( '','', '','','','','','','','');
  @Output() public show = true;
  @Output() public chilEvent = new EventEmitter();

  roleHasError = true;
  errorMsg='';




  constructor(private signService: SignService,
              private route: ActivatedRoute,
              private router: Router,
              private tokenStorage: TokenStorageService

  ) {}




  ngOnInit() {


    $(document).ready(function() {
      $('select').material_select();
    });

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

  }

  validateRole(value) {
    if (value === 'default') {
      this.roleHasError = true;
    } else {
      this.roleHasError = false;
    }
  }

  onSubmit() {


    if (this.userModel.username && this.userModel.password) {
      this.signIn(this.userModel.username,this.userModel.password);
    }


    $("input[name='username']").focus().select();




  }

  onSignup(){
    this.signService.signup(this.userSignUpModel)
      .subscribe(
        data => console.log('success dzfgsdfg!', data),
        error =>  console.error('error !', error)
      )


    this.signIn(this.userSignUpModel.email,this.userSignUpModel.password);

  }

  signIn(username: string , password: string){
    this.signService.login(username, password)
      .subscribe(
        (responce) => {
          if (true) {
            console.log('User is logged in');
            console.log(responce.headers.get('authorization'));


            let isAdmin = this.tokenStorage.getAuthorities().forEach(role => {
              if (role === 'ROLE_ENSEIGNANT') {
                this.router.navigateByUrl('/enseignant');
                return false;
              }
              else if (role === 'ROLE_ETUDIANT'){
                this.router.navigateByUrl('/etudiant');
              }

            });}
        },
        error =>    this.errorMsg = error.statusText  );
    ;
  }




}
