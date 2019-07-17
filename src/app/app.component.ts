import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit { 

  person = [];
  equipment = [];

  constructor(private http: HttpClient){
    this.http.get('assets/test.json').subscribe((data) => 
    this.person = data["person"]);
    this.http.get('assets/test.json').subscribe((data) => 
    this.equipment = data["equipment"]);
    
  }

    
  ngOnInit(){
    
  }
  
}