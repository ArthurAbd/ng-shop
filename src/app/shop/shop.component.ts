import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {
  useDefault = {price: "0", health: "0", armor: "0", attack: "0", img: "none"};
  useHelmet;
  useGlove;
  useChest;
  useBoot;
  useSword;
  id;

 @Input() person: {}
 @Input() equipment: {}

  constructor() {
    this.remove();
  }

  ngOnInit() { }

  remove() {
    this.useHelmet = this.useDefault;
    this.useGlove = this.useDefault;
    this.useChest = this.useDefault;
    this.useBoot = this.useDefault;
    this.useSword = this.useDefault;
    this.id = undefined;
    }
  
    clickHelmet(id) {
      if(id === undefined || id === "undefined") {
        this.useHelmet = this.useDefault;
      } else {
        this.useHelmet = this.equipment["helmets"][id];
      }
    }
    clickGlove(id) {
      if(id === undefined || id === "undefined") {
        this.useGlove = this.useDefault;
      } else {
        this.useGlove = this.equipment["gloves"][id];
      }
    }
    clickChest(id) {
      if(id === undefined || id === "undefined") {
        this.useChest = this.useDefault;
      } else {
        this.useChest = this.equipment["chests"][id];
      }
    }
    clickBoot(id) {
      if(id === undefined || id === "undefined") {
        this.useBoot = this.useDefault;
      } else {
        this.useBoot = this.equipment["boots"][id];
      }
    }
    clickSword(id) {
      if(id === undefined || id === "undefined") {
        this.useSword = this.useDefault;
      } else {
        this.useSword = this.equipment["swords"][id];
      }
    }

}
