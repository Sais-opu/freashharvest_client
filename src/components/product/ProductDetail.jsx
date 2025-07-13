// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [products, setProducts] = useState([]);
//     const [activeTab, setActiveTab] = useState("description");

//     useEffect(() => {
//         fetch(`http://localhost:3001/api/v1/products/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 if (data.success) setProduct(data.product);
//             });

//         fetch("http://localhost:3001/api/v1/products")
//             .then(res => res.json())
//             .then(data => {
//                 if (data.success) setProducts(data.products);
//             });
//     }, [id]);

//     if (!product) return <p>Loading...</p>;

//     const sameCategoryProducts = products.filter(
//         p => p.categoryId === product.categoryId && p._id !== product._id
//     );

//     return (
//         <div className="p-4">
//             {/* Top section */}
//             <div className="flex flex-col lg:flex-row gap-8 mb-8">
//                 <div className="flex-1">
//                     <img
//                         src={product.images?.[0] || "https://via.placeholder.com/300"}
//                         alt={product.productName}
//                         className="w-full max-w-md mx-auto rounded shadow"
//                     />
//                 </div>
//                 <div className="flex-1">
//                     <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
//                     <p className="text-orange-500 text-xl font-semibold mb-4">${product.price}/kg</p>
//                     <p>Stock: {product.stock}</p>
//                     <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>

//             {/* Tab buttons */}
//             <div className="flex gap-4 mb-4">
//                 <button
//                     onClick={() => setActiveTab("description")}
//                     className={`px-4 py-2 rounded ${activeTab === "description" ? "bg-orange-500 text-white" : "bg-gray-200"
//                         }`}
//                 >
//                     Description
//                 </button>
//                 <button
//                     onClick={() => setActiveTab("reviews")}
//                     className={`px-4 py-2 rounded ${activeTab === "reviews" ? "bg-orange-500 text-white" : "bg-gray-200"
//                         }`}
//                 >
//                     Reviews
//                 </button>
//             </div>

//             {/* Tab content */}
//             <div className="mb-8">
//                 {activeTab === "description" && (
//                     <p>{product.description}</p>
//                 )}
//                 {activeTab === "reviews" && (
//                     <p>No reviews yet.</p>
//                 )}
//             </div>

//             {/* Related products */}
//             <h2 className="text-2xl font-bold mb-4">More from this category</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
//                 {sameCategoryProducts.map(p => (
//                     <div key={p._id} className="rounded-lg m-4 shadow-md">
//                         <img
//                             src={p.images?.[0] || "https://via.placeholder.com/300"}
//                             alt={p.productName}
//                             className="h-60 object-cover w-full p-8 rounded"
//                         />
//                         <div className="text-center mt-4">
//                             <h3 className="text-lg font-semibold">{p.productName}</h3>
//                             <h6 className="text-sm text-gray-600">${p.price}/kg</h6>

//                             <div className="mt-4 space-y-2">
//                                 <button className="w-full text-black border border-gray-500 px-4 py-2 rounded hover:bg-[#FF6A1A] hover:text-white transition">
//                                     Add to Cart
//                                 </button>

//                                 <button
//                                     onClick={() => (window.location.href = `/product/${p._id}`)}
//                                     className="text-orange-500 underline px-4 py-2 rounded hover:text-2xl transition"
//                                 >
//                                     Details
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;
import React from 'react';

const ProductDetail = () => {
    return (
        <div>
            
        </div>
    );
};

export default ProductDetail;