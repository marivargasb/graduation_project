import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Manager} from '../lib/manager';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { element } from 'protractor';
import { ManagerService } from "../services/manager.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private ma: Manager[];

  constructor(
    private managerService: ManagerService,
    private http: HttpClient,
    private router: Router,


  ) { }

  ngOnInit() {
    
  }

  GetManager(){
  this.managerService.GetManager()
  .subscribe( data => {  
   alert(data['success'] + "llego");

   });

  }

  RegisterManager(manager){

  
    const email = manager.email.trim(); 
    const password = manager.password.trim(); 
    const Cpassword = manager.cpassword.trim(); 
    const username = manager.username.trim();
    const name = manager.name.trim(); 
    const surnames = manager.surnames.trim(); 
    const state = "off"; 

      
const Manager : Manager ={ email , password , username , name , surnames , state} as Manager;
 this.managerService.AddManager(Manager)
 .subscribe(data => {
  if (!data['success']) {  
    alert("Error al Registrar");
  } else { 
    alert("Registrado exitosamente");

}
});

  
       }



}
