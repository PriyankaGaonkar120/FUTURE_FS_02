import React from "react";

function Home() {
  const products = [
    { id: 1, name: "Dog Food", price: "$20", image: "https://th.bing.com/th/id/R.2d0a062166033115689c4604ae59f4ce?rik=%2bJmJWQC29iIbJQ&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2f10108567%2fprod_2032923812%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=XOXG8DqpncVX%2bCcuhgktcWBKmV1crMho8snYhLmXZuU%3d&risl=&pid=ImgRaw&r=0" },
    { id: 2, name: "Cat Toy", price: "$10", image: "https://m.media-amazon.com/images/I/71eYpjdkSPL.jpg" },
    { id: 3, name: "Bird Cage", price: "$50", image: "https://www.bing.com/th/id/OIP.l2HF0nG8Am_MaoR5vCJCiQHaGE?w=242&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&pid=3.1&rm=3" },
    { id: 4, name: "Fish Tank", price: "$100", image: "https://images-na.ssl-images-amazon.com/images/I/917aueQ1yBL._SL1500_.jpg" },
    { id: 5, name: "Pet Shampoo", price: "$15", image: "https://tse3.mm.bing.net/th/id/OIP.kP7B16uXYqCVA6BeSV9zZAHaJS?pid=Api&P=0&h=180" },
    { id: 6, name: "Dog Collar", price: "$8", image: "https://i5.walmartimages.com/asr/a59f149d-7410-4632-9466-7c4a8597da23.c76fc2425f664ae6db5f69188a7a624a.jpeg" },
    { id: 7, name: "Cat Scratcher", price: "$25", image: "https://m.media-amazon.com/images/I/81CDFCOT6OL._AC_SL1500_.jpg" },
    { id: 8, name: "Bird Seeds", price: "$12", image: "https://tse1.mm.bing.net/th/id/OIP.nlaNtX96zB-oec7IpsgFHAHaEY?pid=Api&P=0&h=180" },
    { id: 9, name: "Fish Food", price: "$5", image: "https://tse2.mm.bing.net/th/id/OIP.jY9LGZX8qkZFC2JIw4fiGwHaHa?pid=Api&P=0&h=180" },
    { id: 10, name: "Rabbit Hutch", price: "$80", image: "https://tse4.mm.bing.net/th/id/OIP.Tg2BuVjaPO-F_dui0iC5_wHaHa?pid=Api&P=0&h=180" },
  ];

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} width="150" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
