import { Gift, Headphones, Package, Ticket } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../lib/utils';
import Loading from '../../components/Spinner';
import { useEffect, useState } from 'react';
const AdminSingleProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product.product);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (!product || product.products?.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-screen-lg px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 shadow-2xl bg-white p-6">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250"
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250"
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="md:py-8 p-6 w-full">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {product.Categories}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {product.Name}
                </h2>
              </div>

              <div className="mb-6 flex items-center md:mb-10">
                <div className="-ml-1 flex gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span className="ml-2 text-sm text-gray-500">4.2</span>

                <a
                  href="#"
                  className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  view all 47 reviews
                </a>
              </div>

              <div className="mb-4 md:mb-6">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Color
                </span>

                <div className="flex flex-wrap gap-2">
                  <span className="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100"></span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                  ></button>
                </div>
              </div>

              <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Size
                </span>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    XS
                  </button>
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    S
                  </button>
                  <span className="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">
                    M
                  </span>
                  <button
                    type="button"
                    className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                  >
                    L
                  </button>
                  <span className="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">
                    XL
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ${product.RegularPrice}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    ${product.SalesPrice}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>

                <span className="text-sm">2-4 day shipping</span>
              </div>

              <div className="flex gap-2.5">
                <a
                  href="#"
                  className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                >
                  Add to cart
                </a>

                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a>
              </div>

              <div className="w-full mt-5">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description:
                </div>

                <p className="text-gray-500">{product.Description}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full py-8 bg-background">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Free Shipping */}
                <div className="flex items-start gap-4 shadow-2xl p-4">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <Package className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Free shipping for all orders over $200
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Only in this week
                    </p>
                  </div>
                </div>

                {/* Special Discounts */}
                <div className="flex items-start gap-4 shadow-2xl p-4">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <Ticket className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Special discounts for customers
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Coupons up to $ 100
                    </p>
                  </div>
                </div>

                {/* Gift Wrapping */}
                <div className="flex items-start gap-4 shadow-2xl p-4">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <Gift className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Free gift wrapping
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      With 100 letters custom note
                    </p>
                  </div>
                </div>

                {/* Customer Service */}
                <div className="flex items-start gap-4 shadow-2xl p-4">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <Headphones className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Expert Customer Service
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      8:00 - 20:00, 7 days/wee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg">
            {/* Left Section: Item Details */}
            <div className="p-6 shadow-2xl rounded-md">
              <h2 className="text-xl font-bold mb-4">Items Detail</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Product Dimensions:</strong> 53.3 x 40.6 x 6.4 cm; 500
                  Grams
                </li>
                <li>
                  <strong>Date First Available:</strong> 22 September 2023
                </li>
                <li>
                  <strong>Department:</strong> Men
                </li>
                <li>
                  <strong>Manufacturer:</strong> Greensboro, NC 27401 Prospa-Pal
                </li>
                <li>
                  <strong>ASIN:</strong> B0CJMML118
                </li>
                <li>
                  <strong>Item Model Number:</strong> 1137AZ
                </li>
                <li>
                  <strong>Country of Origin:</strong> U.S.A
                </li>
                <li>
                  <strong>Packer:</strong> Apt. 726 80915 Hung Stream, Rowetown,
                  WV 44364
                </li>
                <li>
                  <strong>Item Weight:</strong> 500 g
                </li>
                <li>
                  <strong>Item Dimensions (LxWxH):</strong> 53.3 x 40.6 x 6.4 cm
                </li>
                <li>
                  <strong>Generic Name:</strong> T-Shirt
                </li>
                <li>
                  <strong>Best Sellers Rank:</strong> #13 in Clothing &
                  Accessories
                </li>
              </ul>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 block font-medium"
              >
                View More Details →
              </a>
            </div>

            {/* Right Section: Reviews */}
            <div className="p-6 shadow-2xl rounded-md">
              <h2 className="text-xl font-bold mb-4">Top Review From World</h2>
              <div className="space-y-6">
                {/* Review 1 */}
                <div className="flex items-start space-x-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Reviewer 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Henny K. Mark</h3>
                    <p className="text-yellow-500 text-sm">
                      ★★★★★ Excellent Quality
                    </p>
                    <p className="text-sm text-gray-600">
                      Reviewed in Canada on 16 November 2023
                    </p>
                    <p className="mt-2 text-gray-700">
                      Medium thickness. Did not shrink after wash. Good
                      elasticity. XL size perfectly fits for 5.10 height and
                      heavy body. Did not fade after wash. Highly recommended in
                      low price.
                    </p>
                    <div className="text-sm text-gray-500 mt-2">
                      <button className="mr-4 text-blue-500 hover:underline">
                        Helpful
                      </button>
                      <button className="text-blue-500 hover:underline">
                        Report
                      </button>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="flex items-start space-x-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Reviewer 2"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Jorge Herry</h3>
                    <p className="text-yellow-500 text-sm">
                      ★★★★☆ Good Quality
                    </p>
                    <p className="text-sm text-gray-600">
                      Reviewed in USA on 21 December 2023
                    </p>
                    <p className="mt-2 text-gray-700">
                      I liked the T-shirt, it&apos;s pure cotton &
                      skin-friendly, but the size is smaller compared to
                      standard size. Best rated.
                    </p>
                    <div className="text-sm text-gray-500 mt-2">
                      <button className="mr-4 text-blue-500 hover:underline">
                        Helpful
                      </button>
                      <button className="text-blue-500 hover:underline">
                        Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSingleProductDetail;
