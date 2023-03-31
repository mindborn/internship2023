import { Component, OnDestroy, OnInit } from '@angular/core';

interface Item {
  name: string;
  rate: number;
  qty: number;
  discount: number;
}

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.scss']
})
export class Cart2Component implements OnInit {


  items: Item[] = [];
  discount=0;

  ngOnInit(): void {
    console.log('cart2 initialized');

    // this.items.push({
    //   name: 'CD',
    //   rate: 100,
    //   qty: 5
    // });
    // this.items.push({
    //   name: 'DVD',
    //   rate: 500,
    //   qty: 7
    // });
  }

  getTotal() {
    let total = 0;
    for (let item of this.items)
    {
      total += (item.rate * item.qty) * ((100-item.discount)/100);
    }
    return total;
  }

  onAddItem()
  {
    this.items.push({
      name: '',
      rate: 0,
      qty: 0,
      discount: 0
    });
  }

  onDelete1(item:Item)
  {
    let index=this.items.indexOf(item);
    this.items.splice(index,1);
  }

  // onDelete2(index: number)
  // {
  //   this.items.splice(index,1);
  // }

}
