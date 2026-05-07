import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getSingleProduct } from "../../api/productsApi";
import useCartStore from "../../store/useCartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
    enabled: !!id, // IMPORTANT FIX
  });

  const [selectedVariant, setSelectedVariant] = useState(null);

  if (isLoading) return <p className="text-center py-20">Loading...</p>;

  if (isError || !product) {
    return (
      <p className="text-center py-20 text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          className="w-full rounded-xl"
          alt={product.title}
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-3">
            {product.category}
          </p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">
              Select Size:
            </h3>

            <div className="flex gap-3">
              {product.variants?.map((v) => (
                <button
                  key={v.size}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 border rounded ${
                    selectedVariant?.size === v.size
                      ? "bg-orange-500 text-white"
                      : ""
                  }`}
                >
                  {v.size}
                </button>
              ))}
            </div>
          </div>

          {selectedVariant && (
            <p className="text-xl font-bold mt-4 text-orange-500">
              ৳{selectedVariant.price}
            </p>
          )}

          <button
            onClick={() =>
              addToCart(product, selectedVariant)
            }
            disabled={!selectedVariant}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;