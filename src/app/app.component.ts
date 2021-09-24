import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title = 'Angular cliente prueba';
  searchText;
  usuarios: any;
  totalData : any 
  url: string = 'https://localhost:44357/api/Usuarios';
  error : any;

  ngOnInit() {  
    this.http.get<any>(this.url).subscribe(data => {
      debugger;
       this.usuarios = data;
    },error => this.error = error);
  }
}
