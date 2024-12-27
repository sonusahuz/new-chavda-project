import {
  CalendarDays,
  CircleUserRound,
  HousePlus,
  NotepadText,
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Black T-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: '$80.00',
    stock: '486 Items Left',
    sold: '155 Sold',
    category: 'Fashion',
    rating: 2.5,
    reviews: 55,
  },
  {
    id: 2,
    name: 'White T-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: '$70.00',
    stock: '200 Items Left',
    sold: '120 Sold',
    category: 'Fashion',
    rating: 2.3,
    reviews: 30,
  },
  {
    id: 3,
    name: 'Blue Hoodie',
    sizes: ['M', 'L', 'XL'],
    price: '$120.00',
    stock: '150 Items Left',
    sold: '75 Sold',
    category: 'Fashion',
    rating: 2.8,
    reviews: 90,
  },
  {
    id: 2,
    name: 'Green Polo',
    sizes: ['S', 'M', 'L'],
    price: '$50.00',
    stock: '300 Items Left',
    sold: '110 Sold',
    category: 'Fashion',
    rating: 2.2,
    reviews: 40,
  },
  {
    id: 5,
    name: 'Red Jacket',
    sizes: ['L', 'XL'],
    price: '$150.00',
    stock: '80 Items Left',
    sold: '60 Sold',
    category: 'Fashion',
    rating: 2.9,
    reviews: 100,
  },
];
export default function AdminOrderDetails() {
  return (
    <div className="mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 shadow-2xl p-6 rounded-lg">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mt-2">
                <h1 className="text-lg font-medium text-gray-700">
                  #0758267/90
                </h1>
                <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                  Paid
                </span>
                <span className="px-2 py-1 text-sm bg-orange-100 text-orange-700 rounded-full">
                  In Progress
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Order / Order Details / #0758267/90 - April 23, 2024 at 6:23 pm
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                Refund
              </button>
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                Return
              </button>
              <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                Edit Order
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Progress</h2>
            <div className="relative">
              {/* Progress Bar */}
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-[45%] bg-gradient-to-r from-green-500 via-green-500 to-orange-500 rounded-full" />
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-600 mt-2">
                    Order Confirming
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-600 mt-2">
                    Payment Pending
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full" />
                  <span className="text-sm text-gray-600 mt-2">Processing</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full" />
                  <span className="text-sm text-gray-600 mt-2">Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full" />
                  <span className="text-sm text-gray-600 mt-2">Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estimated Shipping */}
          <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Estimated shipping date : Apr 25, 2024</span>
            </div>
            <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
              Make As Ready To Ship
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80 shadow-2xl rounded-lg">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-700 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Sub Total :</span>
                <span className="font-medium">$777.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Discount :</span>
                <span className="font-medium text-red-600">-$60.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delivery Charge :</span>
                <span className="font-medium">$00.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Tax (15.5%) :</span>
                <span className="font-medium">$20.00</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">
                    Total Amount
                  </span>
                  <span className="font-medium text-lg">$737.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="p-6 shadow-2xl rounded-lg">
          <h1 className="my-4">Products</h1>
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className=" border-b">
                <th className="px-2 py-2 text-left">Product Name & Size</th>
                <th className="px-2 py-2">Status</th>
                <th className="px-2 py-2">Quantity</th>
                <th className="px-2 py-2">Price</th>
                <th className="px-2 py-2">Text</th>
                <th className="px-2 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2 flex items-center space-x-2">
                    <img
                      src={`https://techzaa.in/larkon/admin/assets/images/product/p-1.png`}
                      alt={product.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        Size: {product.sizes.join(', ')}
                      </p>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">{product.price}</td>
                  <td className="px-2 py-2 text-center">
                    <p>{product.stock}</p>
                    <p className="text-sm text-gray-500">{product.sold}</p>
                  </td>
                  <td className="px-2 py-2 text-center">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="p-6 space-y-6">
            {/* Payment Information Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h2 className="text-black py-2 inline-block rounded-md mb-4">
                Payment Information
              </h2>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-md flex items-center justify-center">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                  </div>
                  <div>
                    <p className="text-gray-600">Master Card</p>
                    <p className="text-gray-800">xxxx xxxx xxxx 7812</p>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <p className="text-gray-600">
                Transaction ID :{' '}
                <span className="text-gray-800">#IDN768139059</span>
              </p>
              <p className="text-gray-600">
                Card Holder Name :{' '}
                <span className="text-gray-800">Gaston Lapierre</span>
              </p>
            </div>

            {/* Customer Details Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Customer Details
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Gaston Lapierre</p>
                  <p className="text-orange-500">hello@dundermufflin.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-medium">Contact Number</p>
                    <p className="text-gray-600">(723) 732-760-5760</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-700 font-medium">
                      Shipping Address
                    </p>
                    <p className="text-gray-600">Wilson&apos;s Jewelers LTD</p>
                    <p className="text-gray-600">1344 Hershell Hollow Road ,</p>
                    <p className="text-gray-600">Tukwila, WA 98168 ,</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" shadow-2xl p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Order Timeline
        </h2>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-[1.3rem] top-0 h-full w-0.5 bg-gray-200" />

          {/* Packing Started */}
          <div className="relative flex gap-6">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber-100">
              <span className="text-amber-600">C</span>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-700">
                    The packing has been started
                  </h3>
                  <p className="text-sm text-gray-500">
                    Confirmed by Gaston Lapierre
                  </p>
                </div>
                <time className="text-sm text-gray-500">
                  April 23, 2024, 09:40 am
                </time>
              </div>
            </div>
          </div>

          {/* Invoice Sent */}
          <div className="relative flex gap-6">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-700">
                    The Invoice has been sent to the customer
                  </h3>
                  <p className="text-sm text-gray-500">
                    Invoice email was sent to{' '}
                    <span className="text-orange-500">
                      hello@dundermufflin.com
                    </span>
                  </p>
                  <button className="mt-2 px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                    Resend Invoice
                  </button>
                </div>
                <time className="text-sm text-gray-500">
                  April 23, 2024, 09:40 am
                </time>
              </div>
            </div>
          </div>

          {/* Invoice Created */}
          <div className="relative flex gap-6">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-700">
                    The Invoice has been created
                  </h3>
                  <p className="text-sm text-gray-500">
                    Invoice created by Gaston Lapierre
                  </p>
                  <button className="mt-2 px-4 py-2 text-sm text-white bg-orange-500 rounded-md hover:bg-orange-600">
                    Download Invoice
                  </button>
                </div>
                <time className="text-sm text-gray-500">
                  April 23, 2024, 09:40 am
                </time>
              </div>
            </div>
          </div>

          {/* Order Payment */}
          <div className="relative flex gap-6">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-700">Order Payment</h3>
                  <p className="text-sm text-gray-500">Using Master Card</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-gray-600">Status :</span>
                    <span className="px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full">
                      Paid
                    </span>
                  </div>
                </div>
                <time className="text-sm text-gray-500">
                  April 23, 2024, 09:40 am
                </time>
              </div>
            </div>
          </div>

          {/* Order Conform */}
          <div className="relative flex gap-6">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-700">
                    4 Order conform by Gaston Lapierre
                  </h3>
                  <div className="mt-2 flex gap-2">
                    {['Order 1', 'Order 2', 'Order 3', 'Order 4'].map(
                      (order) => (
                        <span
                          key={order}
                          className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md"
                        >
                          {order}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <time className="text-sm text-gray-500">
                  April 23, 2024, 09:40 am
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Free Shipping */}
          <div className="flex items-center  justify-between gap-4 shadow-2xl p-4">
            <div className="space-y-1">
              <h3 className="text-base font-medium">Vender</h3>
              <p className="text-sm text-muted-foreground">Catpiller</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <HousePlus className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          {/* Special Discounts */}
          <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
            <div className="space-y-1">
              <h3 className="text-base font-medium">Date</h3>
              <p className="text-sm text-muted-foreground">April 23 , 2024</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <CalendarDays className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          {/* Gift Wrapping */}
          <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
            <div className="space-y-1">
              <h3 className="text-base font-medium">Paid By</h3>
              <p className="text-sm text-muted-foreground">Gaston Lapierre</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <CircleUserRound className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          {/* Customer Service */}
          <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
            <div className="space-y-1">
              <h3 className="text-base font-medium">Reference #IMEMO</h3>
              <p className="text-sm text-muted-foreground">#0758267/90</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <NotepadText className="w-10 h-10 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
