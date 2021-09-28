import { Component } from '@angular/core';
import { Product } from './produc.model';

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

  names: string[] = [
    'Nombre1',
    'Nombre2',
    'Nombre3',
    'Nombre4',
  ]

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/200/300',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/200/300'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/200/300'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/200/300'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://picsum.photos/200/300'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://picsum.photos/200/300'
    }
  ]

  newName = '';
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName)
    this.newName = ''
  }

  deleteName(index: number){
    this.names.splice(index,1)
  }
}
