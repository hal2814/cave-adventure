export class Character {
  public items = [];
  constructor(
    public name: string,
    public story: string,
    public health: number,
    public strength: number,
    public armor: number,
    public id: number) {};

  addItem(item) {
    this.items.push(item);
  }
}
