import "./styles.css";
import axios from "axios";

const productTemplate = `
  <div class="product">
    <a href="#product">
      <div class="image">
        <img src="{image}" alt="{name}" />
      </div>
      <p class="name">
        <span>{name}</span>
      </p>
    </a>
  </div>
`;

const handle = (products) => {
  const productsDom = document.getElementById('products');
  products.forEach(product => {
    let template = productTemplate;
    for (const key in product) {
      if (!Object.hasOwnProperty.call(product, key))
        continue;

      const value = product[key];
      template = template.replaceAll(`{${key}}`, value);
    }
    productsDom.innerHTML += template;
  });
};

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response);
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const { data: products } = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((product) => console.log(product.name))
    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const filterText = 'Şal';
    const mappedProducts = products
      .filter(({ name }) => name.includes(filterText))
      .map(({ name, image }) => ({ name, image }));

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    //handle(mappedProducts);
    handle(mappedProducts);
  });
