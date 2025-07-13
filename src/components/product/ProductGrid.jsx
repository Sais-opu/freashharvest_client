
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all products
        fetch("http://localhost:3001/api/v1/products")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setProducts(data.products);
                }
            });

        // Fetch all categories
        fetch("http://localhost:3001/api/v1/category")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCategories(data.categories || []);
                }
            });
    }, []);

    // Match product.categoryId to category.id (not _id!)
    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter(product => product.categoryId === selectedCategory);

    return (
        <div className="p-6 w-11/12 mx-auto">
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-2 rounded ${selectedCategory === "all"
                            ? "bg-[#749B3F] text-white"
                            : "border border-gray-400"
                        }`}
                >
                    All
                </button>

                {categories.map(cat => (
                    <button
                        key={cat._id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded capitalize ${selectedCategory === cat.id
                                ? "bg-[#749B3F] text-white"
                                : "border border-gray-400"
                            }`}
                    >
                        {cat.categoryName}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {filteredProducts.map(product => (
                    <div key={product._id} className="rounded-lg m-4 shadow-md">
                        <img
                            src={product.images?.[0] || "https://via.placeholder.com/300"}
                            alt={product.productName}
                            className="h-60 object-cover w-full p-8 rounded"
                        />
                        <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold">{product.productName}</h3>
                            <h6 className="text-sm text-gray-600">${product.price}/kg</h6>

                            <div className="mt-4 space-y-2">
                                <button className="w-full text-black border border-gray-500 px-4 py-2 rounded hover:bg-[#FF6A1A] hover:text-white transition">
                                    Add to Cart
                                </button>

                                <button
                                    onClick={() => navigate(`/product/${product._id}`)}
                                    className="text-orange-500 underline px-4 py-2 rounded hover:text-2xl transition"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="justify-center align-middle text-center">
                <button className="btn rounded-lg border-[#FF6A1A] justify-center items-center text-center text-lg py-5 text-[#FF6A1A]  px-8">
                    See All Product
                </button>
            </div>
        </div>
    );
};

export default ProductGrid;