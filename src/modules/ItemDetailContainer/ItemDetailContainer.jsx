import { useContext, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import { Container } from "../../globalStyle";
import { DataContext } from "../../context/DataContext";

import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useOutletContext();
  const [product, setProduct] = useState({});
  const { productsFromDatabase } = useContext(DataContext);

  useEffect(() => {
    setIsLoading(true);

    const itemInfo = productsFromDatabase.find((doc) => doc.id === id);
    setProduct(itemInfo);
    setTimeout(() => setIsLoading(false), 500);
  }, [id, setIsLoading, productsFromDatabase]);

  return (
    <Container>
      {!isLoading ? <ItemDetail product={product} /> : null}
    </Container>
  );
};

export default ItemDetailContainer;
