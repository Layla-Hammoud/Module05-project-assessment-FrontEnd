import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import ProductCard from "../../Components/ProductsCard";
import './AllProducts.css'
export default function AllProducts() {
  const { apiCall } = useApi();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await apiCall({
          url: "/product/AllProducts",
          method: "get",
        });
        setData(response.data);
      } catch {
        console.log("error while geting data");
      }
    };
    fetching();
  }, []);
  console.log(data)
  return <>
  <h1>All Products</h1>
  <div className="container">
          {data &&
            data.map((product, index) => (
              <ProductCard
                key={index}
                productID={product._id}
                name={product.name}
                image={product.image}
                unitPrice={product.price}
              />
            ))}
        </div>
  
  </>;
}
