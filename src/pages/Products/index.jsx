import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [isNewProduct, setIsNewProduct] = useState(false);

  useEffect(() => {
    // we need to create an if statement to make sure that it only renders when a product is created
    if (isNewProduct) {
      console.log("we have a new product");
      setIsNewProduct(true);
    }
  }, [isNewProduct, product]);

  const addProduct = (e) => {
    e.preventDefault();
    // creating a object to display the new product
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    // copy the old product, with the new product
    setProduct([...product, newProduct]);
    // setting the input to empty values after the submit
    setProductName("");
    setProductDescription("");
    setProductPrice(0);
    setIsNewProduct(true);
  };
  const handleChangeName = (e) => {
    setProductName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setProductDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setProductPrice(e.target.value);
  };

  const products = product.map((item, index) => {
    return (
      <div key={index}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button>$ {item.price}</button>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={addProduct}>
        <input
          type="text"
          value={productName}
          onChange={handleChangeName}
          placeholder="product name"
        />

        <input
          type="text"
          value={productDescription}
          onChange={handleChangeDescription}
          placeholder="product description"
        />

        <input
          type="number"
          value={productPrice}
          onChange={handleChangePrice}
          placeholder="$ price"
        />
        <button>submit</button>
      </form>
      {products}
    </div>
  );
};

export default Products;
