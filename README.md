# Component Library :books:


## Drop down menu 

Copy the template below and add or remove `li` elements to the
`ul` element. DO NOT remove `drop-down` className or change
the template structure. Only change the innerHTML of the `button`
element or add, remove or change innerHTML of the `li` elements.
Add the className `drop-down-small` for a drop down menu with a 
width of 200px, `drop-down-medium` for a drop down menu with a 
width of 400px or `drop-down-big` for a drop down menu with a 
width of 800px. [See live demo](https://sinabayati.github.io/component-library/)

```
  <div class="drop-down drop-down-small">
    <button>menu</button>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>
```
<table>
  <tr>
    <th colspan="2">drop down menu sizes</th>
  </tr>
  <tr>
    <td>drop-down-small</td>
    <td>200px</td>
  </tr>
  <tr>
    <td>drop-down-medium</td>
    <td>400px</td>
  </tr>
  <tr>
    <td>drop-down-big</td>
    <td>800px</td>
  </tr>
</table>

## Carousel

In order to add a carousel to the page add below template 
and add or remove `img` tags to the `div` with `slide-container` className. Make sure to add `slide` 
className to the `img` tags or else the carousel wont work.
This carousel is not reusable in the sense that only one 
can be placed per page. The reason behind this is that the 
carousel is storing its state in global variables. [See live demo](https://sinabayati.github.io/component-library/)

```
  <div class="carousel">
    <div class="carousel-frame">
      <div class="slide-container">
        <img src="" alt="" class="slide">
      </div>
    </div>
    <button class="next"> &gt; </button>
    <button class="prev"> &lt; </button>
  </div>
```