import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../Catalog/Catalog.module.css";
import CatalogCard from "./CatalogCard/CatalogCard";
import { baseURL } from "../../util/http-request-url";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/products`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div id={style.catalog_wrapper}>
      {products.map((product) =>
        product.title.includes("Custom") ? (
          ""
        ) : (
          <CatalogCard
            key={product._id}
            id={product._id}
            title={product.title}
            case={product.case}
            motherboard={product.motherboard}
            cpu={product.cpu}
            ram={product.ram}
            storage={product.storage}
            gpu={product.gpu}
            psu={product.psu}
            image={product.image}
            price={product.price}
            reviewLink={product.reviewLink}
          />
        )
      )}
    </div>
  );
}

export default Catalog;
