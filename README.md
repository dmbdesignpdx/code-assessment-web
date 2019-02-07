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
- [x] <s>Design - Components</s>
- [x] <s>Design - Layout</s>
- [x] <s>Design - Cart</s>
- [x] <s>Use product API</s>
- [x] <s>Accessibility</s>

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

Hold up! :hand: I've thought a lot about the action buttons for the cart and realized that there can be an easier way to implement the `Product` as it relates to the buttons. It's a bit of restructuring involving that `Product` takes in a child node that would be provided by the `ProductItem` or `CartItem`; the nodes would be the corresponding action buttons, thus maintaining the image, title, price, and action structure for both product list and cart.

In terms of layout for the `Product`, the best solution would be css grid. I usually would implement a progressive enhancement approach to styling with css grid, but in this case, a solution can be reached by the use of basic css grid (which IE and older Edge fully support with `-ms-`).

I usually like to use inline svgs for icons, or an external collection of symbols. Those approaches, in my opinion, are much easier set up and offer more interesting ways to interact with than using an icon font. SVGs are the :bomb:.

It is time... The time has come to style-up the cart. And to get this modal working properly, not just showing and hiding but working by html/aria specs... well, as best it can... `dialog` has pretty good support as an element, just not for `::backdrop` (which will be fantastic when that's fully adopted), and `show()`, `showModal()`, etc. are still experimental and poorly supported.

API hooked up. :electric_plug: ...and no :fire:!

Replaced the temperary scripts for toggling the `open` attribute of the `dialog` with some state action. Added `showing` to the `cart` object of the state, and added the appropriate action types to handle that state. Much action types!

Just need to sift through and add some accessibility, do a little bit of cleaning, double-check the design, and this puppy should be good to go. :dog2:

#### 2/6/19

:coffee: Did some tidying up of files this morning.

Introduced a new state of `currencyType`. Seemed appropriate. Also handled the logic of product sub totals, taxes, and the total total.

Went through and added some accessibility as best I could. It may not be perfect, but I'm constantly learning how to improve accessibility, and so I add what I know because it's absolutely better than not adding anything at all. (Also, I'm relying on my copywriting skills :sweat_smile:)

Did a last sweep through the code and design check. Should be :ok_hand:.

Updated all test spec files.

I think this little app is at a good place! :tada: :sparkles: :unicorn: I actually had a good time doing this. I'll admit I've not had a lot of opportunity to work with other developer's code, so it felt like I started off a little slower than I'd like. However, I feel that I was able to become familiar with the code rather quickly and it started feel like my own. 

I really hope to discuss in person, with whoever is reading this, what I could have improved on, any ideas/conversations my code may have sparked, and/or just coding in general. Thank you for time and I hope to hear from you soon.

-Daniel
