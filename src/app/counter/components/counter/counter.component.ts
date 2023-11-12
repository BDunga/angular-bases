import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  template:`
<h3>Counter :{{counter}}</h3>

<button (click)="increaseBy()"> + </button>
<button (click)="resetBy()"> Reset</button>
<button (click)="decreaseBy()"> - </button>`

})


export class CounterComponent{
  public title:string = 'Hola Chanchito';
  public counter:number = 10;

  increaseBy():void{
    this.counter += 1;
  }

  decreaseBy():void{
    this.counter -=1;
  }
  resetBy():void{
    this.counter = 10;
  }
}
