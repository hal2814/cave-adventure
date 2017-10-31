import { Character } from './character.model';
import { Cave } from './cave.model';
import { Item } from './item.model';

export const ITEMS: Character[] = [
  new Item("Rusty Pickaxe","weapon", 2, "Its more rust than pick..."),
  new Item("Bat Leather Jacket","armor",10, "Soft."),
  new Item("Vegan Bacon Cheeseburger","food",10, "it says '100% vegan' on the wrapper."),
  new Item("Bagel with cream cheese","food",5, "has the name 'Javi' written on the wrapper."),
  new Item("Barlton's ancient sword","weapon",5,"Barlton won't be needing this anymore."),
  new Item("Filth Filled Boots","armor", 2, "Looks like someone spewed in their boots"),
  new Item("a human skeleton ribcage","armor", 3, "It still has bits of person on it, but it will make a good chest plate"),
  new Item("Mountain Dew","food",7, "'It'll tickle yore innards' -Willy The Hillbilly")
];

export const CHARACTERS: Character[] = [
 new Character("Dave the Cave Explorer", 100, 5, 0, 1),
 new Character("Gramantha", 75, 7, 10, 2),
 new Character("Lil Lost Timmy", 120, 2, 0, 3),
 new Character("Larry the Woodsman", 50, 10, 20, 4),

 new Character("Cave Dweller", 20, 2, 0, 5),
 new Character("Facebat", 10, 4, 0, 6),
 new Character("Cave Gnome", 15, 3, 3, 7),
 new Character("Chorgoth the Cave Hippo", 30, 1, 5, 8),

];

export const CAVES: Cave[] = [
 new Cave("Walking through the forest you see a giant dark cave entrance:",1),
 new Cave("As you enter the tunnel you come across a skeleton next to a backpack: ",2),
 new Cave(3),
 new Cave(4),
 new Cave(5),
 new Cave(6)
];

// CAVES[0].addItems();
