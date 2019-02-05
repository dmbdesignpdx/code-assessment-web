# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

Please publish your work to a fork of this repo. You're welcome (but not required) to add any libraries you think would be helpful.

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your fork's git history.

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

<br>

---

## :computer: My Updates

### To Do

- [x] <s>Add intial comments</s>
- [x] <s>Semantic changes</s>
- [x] <s>Build new Cart features</s>
- [x] <s>Cart - Remove an item</s>
- [x] <s>Cart - Update an item quantity</s>
- [x] <s>Design - Breakpoints & Globals</s>
- [x] <s>Design - Patterns</s>
- [ ] Design - Components
- [ ] Design - Layout
- [ ] Design - Cart
- [ ] Use product API
- [ ] Accessibility

### Notes

#### 2/3/19

Yay! No semicolons!! :thumbsup: :thumbsup:

Writing comments helps me get acquainted and orient myself with an unknown project. Components are pretty self-explanatory, but I'll add some comments for the actions and reducers.

I'm a really big proponent of semantic markup, so I can swap out some `div`s and remove some that are unnecessary &mdash; give a little meaning to these elements, but keep it pretty basic. I'll probably make a few more changes when I get to building out the layout based on the design.

I'd like to tackle the cart features before implementing the desgin. To me, it makes sense to get things working first. Which means, I need to set up those buttons!

Once the features and design have been completed, I'll swap out the mock API for the online product endpoint.

With the buttons set up, I can now start on making them actually work. Looking at the design, the "Remove" button may have to belong to the `Product` component &mdash; there might be some layout challenges if it stays outside the container of the product... we shall see. 🤔

#### 2/4/19

Created a new component `CartItem` to house the `Product` component and the action buttons for the item.

Finished the "remove" feature for the cart. It successfully removes an item and returns the quantity in the cart back to the inventory. :sparkles: The next step is to add the decrease and increase quantity feature to the cart.

Updating quantity (increase and decrease) feature finished. :sunglasses: I had a little UX debate in my head: when faced with decreasing the quantity, is the user allowed to decrease to zero (and the item removed automatically) or is the decrease button disabled when at `1`? I ultimately decided that if a zero quantity meant removing the item, it might be an unwanted action. A user could accidentally click the decrease button to where it accidentally removes it. Giving removing powers only to the remove button and disabling the decrease button at `1` should cut down on accidents. :punch:

Right. Time to implement the design. :raised_hands:

Going to start off with writing the global styles and setting up ze breakpoints. I'll use a bit of my own css boilerplate for resets and normalizing. From there I'll work on the patterns (buttons, cards, etc.).

I'll continue to tweak global styles and patterns while I work on component styles. Next up: product component styles and setup. I'll add class names and any html elements needed to aid in styling. Will also add the :watch: images. It'll be looking slick in no time.

Looks like I'll have to place the Acme Store header in its own private component.

#### 2/5/19

:boom: Shake up! :boom: I've thought a lot about the action buttons for the cart and realized that there can be an easier way to implement the `Product` as it relates to the buttons. It's a bit of restructuring involving that `Product` takes in a child node that would be provided by the `ProductItem` or `CartItem`; the nodes would be the corresponding action buttons, thus maintaining the image, title, price, and action structure for both product list and cart.

In terms of layout for the `Product`, the best solution would be css grid. I usually would implement a progressive enhancement approach to styling with css grid, but in this case, a solution can be reached by the use of basic css grid (which IE and older Edge fully support with `-ms-`).
