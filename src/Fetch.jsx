import { useState, useEffect } from 'react';

const Fetch = ({ productIndex }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data && data.length > 0 && productIndex >= 0 && productIndex < data.length) {
            setProduct(data[productIndex]);
        } 
        else {
            console.error('Invalid product index or no data found');
            setProduct(null);
        }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setProduct(null);
        });
    }, [productIndex]);

  return (
    <>
    {product && <img src={product.image} alt={`Product`} style={{ height: '100%' }}></img>}
    </>
  );
};

export default Fetch;