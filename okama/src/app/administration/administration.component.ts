import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Culture } from '../lib/culture';
import { Expression } from '../lib/expression';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';
import { CultureService } from "../services/culture.service";
import { ExpressionsService } from "../services/expressions.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  private cu: Culture[];

  constructor(
    private cultureService: CultureService,
    private expressionsService: ExpressionsService ,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  RegisterCulture(culture) {
    alert("entro a registro");

    const name = culture.name.trim();
    const description = culture.description.trim();
    const territory = culture.territory.trim();


    const Culture: Culture = { name, description, territory } as Culture;
    this.cultureService.AddCulture(Culture)
      .subscribe(data => {

        if (!data['success']) {
          alert("Error al Registrar");
        } else {
          alert("Registrado exitosamente");

        }
      });
  }

  RegisterExpression(expression) {

    const name = expression.names.trim();
    const description = expression.description.trim();
    const link = expression.link.trim();
    const categorie = expression.categorie.trim();
    const id= "5d0d12e98eb36307ec4ad615";

    const Expression: Expression = {name, description ,link, categorie} as Expression;
    this.expressionsService.AddExpression(Expression, id)
    .subscribe(data => {

      if (!data['success']) {
        alert("Error al Registrar");
      } else {
        alert("Registrado exitosamente");

      }
    });


  }


  GetCulture() {

    this.cultureService.GetCulture()
      .subscribe(data => {
        alert(data['success'] + "llego culture");

      });


  }
}
