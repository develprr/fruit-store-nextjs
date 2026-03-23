export interface Fruit {
  id: string;
  name: string;
  emoji: string;
  price: number;
  color: string;
  description: string;
}

export interface CartItem {
  fruit: Fruit;
  quantity: number;
}
