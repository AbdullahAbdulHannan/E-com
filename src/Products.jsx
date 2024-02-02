import axios from "axios";
let PRODUCTS;
axios.get('https://dummyjson.com/products')
      .then((res) => {
        PRODUCTS= res.data.products;
    })
    .catch(err => console.log(err.message));
    export {PRODUCTS}
    // setProducts(res.data.products);
    // console.log('a==>',a);
    // setFilteredProducts(res.data.products);