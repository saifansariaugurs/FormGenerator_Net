import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  Name="Name";
  constructor(public translate: TranslateService) {
    
  }
  changeLanguage( lang: string){
this.translate.use(lang);
  }
  ngOnInit(){
    this.translate.addLangs(["en", "ch"]);
    this.translate.setDefaultLang('en');
//        translate.use('en');

    //let browserLang = translate.getBrowserLang();
  let browserLang='en';
    this.translate.use(browserLang.match(/en|ch/) ? browserLang : 'en');
  }
}
