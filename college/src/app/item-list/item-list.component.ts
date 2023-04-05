import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  itemList:Item[]=[];

  constructor()
  {

    this.itemList.push(new Item('iPhone',100000,'Overpriced phone','iphone.jpg'));
    this.itemList.push(new Item('Motorola G40',200000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  atque a unde quo maiores ex asperiores rem!','mg40.jpg'));
    this.itemList.push(new Item('Samsung Galaxy J7',100000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  atque a unde quo maiores ex asperiores rem!','samj7.jpg'));
    this.itemList.push(new Item('Nokia 3310',100000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  atque a unde quo maiores ex asperiores rem!','n3310.jpg'));
  }

  onDelete(item: Item) // invoked by client
  {
    let index=this.itemList.indexOf(item);
    this.itemList.splice(index,1);
  }

  onMoveToTop(item: Item)
  {
    let index=this.itemList.indexOf(item);
    this.itemList.splice(index,1);
    this.itemList.splice(0,0,item);
  }

}
