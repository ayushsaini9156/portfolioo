import React from 'react';
import Product from '../product/Product'; // Adjust path based on actual file structure
import { products } from '../../data'; // Adjust path based on actual file structure and name
import "./productlist.css"; // Import productlist.css for styling

// Importing images (adjust paths as per your file structure)
import eCommImage from '../../img/e-commerce.png';
import nftImage from '../../img/nft.png';
import socialMediaImage from '../../img/social media.jpg';
import androidImage from '../../img/notes.png';

const ProductList = () => {
  // Function to get product image based on id
  const getProductImage = (productId) => {
    switch (productId) {
      case 1:
        return eCommImage;
      case 2:
        return nftImage;
      case 3:
        return socialMediaImage;
      case 4:
        return androidImage;
      default:
        return null;
    }
  };

  return (
    <div className="product-list">
      <h2 className="pl-title">Projects</h2>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} img={getProductImage(product.id)} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
