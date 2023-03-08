import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CartItem, Cart } from '../shared/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantity: string) {
    this.cartService.changeQuantity(cartItem.food.id, +quantity);
    this.setCart();
  }
}
