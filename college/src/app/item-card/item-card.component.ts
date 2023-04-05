import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input("it")
  item!: Item;

  @Output()
  deleted=new EventEmitter();

  @Output()
  movetotop=new EventEmitter();

  onDelete()
  {
    console.log('Deleting item',this.item.name);
    this.deleted.emit(this.item);
  }

  onMove()
  {
    this.movetotop.emit(this.item);
  }

}
