// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card';
// import ResponsiveAppBar from '../components/Navbar'
// const Home = () => {
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       axios.get("https://dummyjson.com/products")
//         .then((res) => setProducts(res.data.products))
//         .catch(err => console.log(err.message));
//     }, []);
  
//     return (
//       <>
//       <ResponsiveAppBar products={products}/>
//       <div className=' grid grid-cols-3 gap-2'>
//         {products.map((product, index) => (
//           <Card
//             key={index}
//             title={product.title}
//             description={product.description}
//             rating={product.rating}
//             price={product.price}
//             image={product.images[0]}
//             productId={product.id}
//           />
          
//           ))}
//       </div>
//             </>
//     );
//   }
// export default Home
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import ResponsiveAppBar from '../components/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch(err => console.log(err.message));
  }, []);

  const handleSearch = (searchValue) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <ResponsiveAppBar onSearch={handleSearch} />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
            image={product.images[0]}
            productId={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
