import { useQuery } from "@tanstack/react-query";

import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductGrid from "../product/ProductGrid";

import { getProducts } from "../../api/productsApi";

const Bestsellers = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Bestselling Products"
          subtitle="Top quality products loved by our customers"
        />

        <ProductGrid products={products} />
      </Container>
    </section>
  );
};

export default Bestsellers;