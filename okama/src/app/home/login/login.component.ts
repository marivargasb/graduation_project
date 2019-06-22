import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Manager} from '../../lib/manager';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { element } from 'protractor';
import { ManagerService } from "../../services/manager.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private managerService: ManagerService,
    private http: HttpClient,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  LoginManager(manager){

    const username = manager.username.trim(); 
    const password = manager.password.trim(); 
 

    const Manager: Manager = {username, password} as Manager;
    
    this.managerService.LoginManager(Manager)
    .subscribe(data => {

      alert(data['success']);

      if(!data['success']){
        alert("no paso");   
  
       }else{    
        alert("logueado");       
       setTimeout(() => {
          this.router.navigate(['/home']); // Navigate to dashboard view
        }, 1);
       }
  


    });

  }

}
