import { Link } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          {product.category}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-orange-500">
            ৳{product.price}
          </span>

          <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">
            <HiOutlineShoppingBag />
          </button>
        </div>

        <Link
          to={`/product/${product._id}`}
          className="block mt-4 text-center border border-orange-200 py-2 rounded-lg hover:bg-orange-50"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;