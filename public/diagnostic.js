'use strict';

/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
const Order = Ember.Object.extend({
  unitPrice: null,
  quantity: null,
  orderPrice: Ember.computed('unitPrice', 'quantity', function(){
    return this.get('unitPrice') * this.get('quantity');
  })
});

// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
const Cart = Ember.Object.extend({
  orders:[],
  total: null,
  addToCart: function(order){
    orders.push(order);
  })
  totalPrice: Ember.computed('orders', function(){
    orders.forEach (function (order) => {
      total =+ order.get('orderPrice');
    });
    return total;
  })
});

// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

let newCart = Cart.create({

});

let order1 = Order.create({
  quantity: '2 hats',
  unitPrice: '$5',
});

newCart.get('addToCart')(order1);
