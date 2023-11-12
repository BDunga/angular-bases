import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string [] =['Spiderman','Ironman','Hulk','She Hulk','Superman'];
  public deletedHero?:string;
  removeLasthero():void{
    this.deletedHero = this.heroNames.pop();

  }
  resetHeroes(){
    return this.heroNames.push('Spiderman','Ironman','Hulk','She Hulk','Superman');
  }
}
