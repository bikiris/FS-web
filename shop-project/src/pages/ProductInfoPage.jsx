import Navbar from "../components/Navbar";
import { useState } from "react";

const ProductInfoPage = () => {
  const colors = ["Black", "White", "Blue", "Red"];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const [showDetails, setShowDetails] = useState(false);

  const [showShipping, setShowShipping] = useState(false);

  return (
    <div>
      <Navbar />

      <div className='grid grid-cols-2 pt-20'>
        {/* product image */}
        <div className='p-4 h-full flex justify-center items-start'>
          <img src='https://www.stussy.com/cdn/shop/files/338380_BBLE_1.jpg?v=1742466347&width=480' />
        </div>

        {/* product info */}
        <div className='p-4'>
          <p className='font-bold text-xl'>LANDON SUNGLASSES</p>
          <p className='pt-5'>$160</p>

          {/* colors */}
          <div className='pt-5'>
            <p>Color: {currentColor}</p>

            <div className='flex pt-2 flex-wrap gap-2'>
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentColor(color)}
                  className={
                    currentColor === color
                      ? "!bg-black !py-3 !px-6 !rounded-none !border-2 !border-white"
                      : "!bg-gray-700 !py-3 !px-6 !rounded-none hover:!border-2 hover:!border-white"
                  }
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* sizes */}
          <div></div>

          <button className='mt-4'>add to cart</button>

          <div className='pt-4 flex flex-col '>
            {/* header */}
            <div
              className='w-full cursor-pointer border p-2'
              onClick={() => setShowDetails(!showDetails)}
            >
              <p className='font-bold'>Product Description</p>
            </div>
            {/* actual text */}
            {showDetails ? (
              <p className='text-sm border p-2'>
                Classic sport frames with a slightly tapered silhouette.
                Handmade in grey bio-acetate with silver flare recycled lenses.
                Features laser-engraved logo detailing at the lens corner and
                metal SS link plates at the temples.
                <br />
                - 100% UVA/UVB protection
                <br />
                - Five barrel hinges
                <br />- Unisex - Wider fit - Frame width: 5.5" / 140mm - Frame
                material: 100% bio-acetate - Lens material: 100% nylon (50%
                recycled) - Includes branded case and cleaning cloth - Made in
                Japan
              </p>
            ) : (
              <></>
            )}
          </div>

          <div className="pt-4">
            <div className='border p-2 font-bold' onClick={() => setShowShipping(!showShipping)}>
              <p>Shipping & Delivery</p>
            </div>
            {showShipping ? (
              <p className="text-sm border p-2">
                Standard $9 (3-7 business days) APO, FPO and P.O. boxes:
                Standard – $15 (3-7 business days) Alaska, Hawaii, Puerto Rico,
                Virgin Islands: Standard – $15 (3-7 business days) Returns can
                be made within seven days of delivery. Exclusions apply. See our
                return guidelines for more details. Please note that some
                exclusions apply. Certain items may not qualify for free
                shipping due to size, weight or destination. Check our terms of
                use or contact support@stussy.com for more details.
              </p>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
