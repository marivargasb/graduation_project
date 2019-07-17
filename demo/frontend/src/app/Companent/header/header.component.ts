import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeLang = 'es';

  constructor( private translate: TranslateService ) {
        
    this.translate.setDefaultLang(this.activeLang);
      }

  ngOnInit() {
  }

  public cambiarLenguaje(lang) {
    
    this.activeLang = lang;
        
    this.translate.use(lang);
      }

}
