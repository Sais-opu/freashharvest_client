import ProductGrid from "../product/ProductGrid";


const Shop = () => {
    return (
        <div className="">
            {/*  */}
            <div className="flex flex-col items-center text-center">
                <h3 className="bg-gray-200 rounded-xl inline-block py-1 px-3 text-[#749B3F] font-semibold mb-2 text-lg md:text-xl">
                    Our products
                </h3>
                <h1 className="text-xl font-bold xl:text-[48px]">
                    Our Fresh Products
                </h1>
                <p className="py-6 max-w-md">
                    We pride ourselves an offereing a wide variety of fresh and flavourful fruits,
                    vegetable and salad incredients 
                </p>
            </div>
            


            <ProductGrid></ProductGrid>
        </div>
    );
};

export default Shop;