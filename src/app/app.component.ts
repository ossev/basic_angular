import { Component } from '@angular/core';

@Component({//Este decorador le dice a angular como debe comportarse esta clase, su template y los estilos
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Osnayder';
  age = 32;
  img = 'https://picsum.photos/200/300';
  btnDisabled = true;
  person = {
    name:'Osnayder',
    age:18,
    avatar:'https://picsum.photos/200/300'
  };

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++;
  }
}
