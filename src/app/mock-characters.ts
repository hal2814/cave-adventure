import { Character } from './character.model';
import { Cave } from './cave.model';
import { Item } from './item.model';

export const ITEMS: Item[] = [
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
 new Character("Dave the Cave Explorer", "Dave decided to go searching for caves, as he loves to explore them in his free time.", 100, 5, 0, 1),
 new Character("Gramantha","Once an heiress to a whipcream empire, Gramantha turned her back on her privellage and decided to explore caves or something.", 75, 7, 10, 2),
 new Character("Lil Lost Timmy","He's little. He's lost. He's Timmy.", 120, 2, 0, 3),
 new Character("Larry the Woodsman", "A large barrel chested man whos only love is the forest and his dog Juniper. He also likes caves.", 50, 10, 20, 4),

 new Character("Cave Dweller","You hear a strange sound, much like a child whimpering, or screaming. You don't really know, but it's getting closer.", 20, 2, 0, 5),
 new Character("Facebat","You hear an undeniable sound, screeching, it's definitely a facebat!", 10, 4, 0, 6),
 new Character("Cave Gnome", "You feel a strange sensation on your leg, almost as if a tiny dog brushed your ankles, but then you notice a tiny human-like face, with a dumb pointy hat, Watch out! It's a cave gnome!", 15, 3, 3, 7),
 new Character("Chorgoth the Cave Hippo","The ground rumbles...It's getting closer..Is it? It can't be...It's Chorgoth the Cave Hippo. He's large and in charge! Prepare for battle!", 30, 1, 5, 8),

];

export const CAVES: Cave[] = [
 new Cave("Walking through the forest you see a giant dark cave entrance:",1),
 new Cave("As you enter the tunnel you come across a skeleton next to a backpack: ",2),
 new Cave("As you walk through this side of the cave you enveloped in pure darkness, all you can see is something shiny in the distance",3),
 new Cave("You come across what appears to be some kind of nesting ground for an unspeakable creature.",4),
 new Cave("The sound of dripping water catches your attention, but even more exciting is the sight of a strange chest halfway submerged in a shallow pool.",5),
 new Cave("It stinks... really bad. The floor is sticky and mushy. You see something sticking out of this disgusting substance.",6),
 new Cave("You come across a large underground waterfall, It appears to be a dead end but you feel a breeze coming from the direction of the waterfall",6),
];

CAVES[0].addDirections("left");
CAVES[0].addDirections("right");
CAVES[1].addItems(ITEMS[0]);
CAVES[1].addItems(ITEMS[1]);
CAVES[1].addDirections("left");
CAVES[1].addDirections("right");
CAVES[2].addItems(ITEMS[3]);
CAVES[2].addItems(ITEMS[4]);
CAVES[2].addDirections("left");
CAVES[2].addDirections("right");
