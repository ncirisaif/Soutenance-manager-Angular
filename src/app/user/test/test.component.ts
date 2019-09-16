import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrentUser} from "../../current-user";
import {SignService} from "../../sign.service";
import {TokenStorageService} from "../../token-storage-service";

declare var $:any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']

})
export class TestComponent implements OnInit {
   token :string;

  public currentUser = new CurrentUser();



  constructor(private route: ActivatedRoute,
              private router: Router,
              private signService: SignService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
   this.initiat();
  }



  initiat() {
    if (!this.tokenStorageService.getToken()) {
      return Promise.reject("No access token set.");
    } else {
      let id = this.tokenStorageService.getId();

      this.signService.getInfo(id).subscribe((data: CurrentUser) => this.currentUser = data);
    }
  }


  logout() {
    window.sessionStorage.clear();
    window.location.reload();

  }


}
