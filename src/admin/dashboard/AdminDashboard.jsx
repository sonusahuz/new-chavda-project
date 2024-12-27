import { Alert, Button, Card } from '@material-tailwind/react';
import { Package, Award, Store, DollarSign } from 'lucide-react';
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
const cardData = [
  {
    icon: <Package className="h-6 w-6 text-orange-500" />,
    title: 'Total Orders',
    value: '13,647',
    change: '↑ 2.3%',
    changePeriod: 'Last Week',
    textColor: 'text-green-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <Award className="h-6 w-6 text-orange-500" />,
    title: 'New Leads',
    value: '9,526',
    change: '↑ 8.1%',
    changePeriod: 'Last Month',
    textColor: 'text-green-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <Store className="h-6 w-6 text-orange-500" />,
    title: 'Deals',
    value: '976',
    change: '↓ 0.3%',
    changePeriod: 'Last Month',
    textColor: 'text-red-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <DollarSign className="h-6 w-6 text-orange-500" />,
    title: 'Booked Revenue',
    value: '$123.6k',
    change: '↓ 10.6%',
    changePeriod: 'Last Month',
    textColor: 'text-red-600',
    bgColor: 'bg-orange-50',
  },
];

import { GaugeChart } from '../../components/gurge-chart';
import { WorldMap } from '../../components/world-map';

const topPages = [
  { path: 'larkon/ecommerce.html', views: 465, exitRate: 4.4 },
  { path: 'larkon/dashboard.html', views: 426, exitRate: 20.4 },
  { path: 'larkon/chat.html', views: 254, exitRate: 12.25 },
  { path: 'larkon/auth-login.html', views: 3369, exitRate: 5.2 },
  { path: 'larkon/email.html', views: 985, exitRate: 64.2 },
  { path: 'larkon/social.html', views: 653, exitRate: 2.4 },
  { path: 'larkon/blog.html', views: 478, exitRate: 1.4 },
];

const data = [
  { month: 'Jan', pageViews: 32, clicks: 8 },
  { month: 'Feb', pageViews: 65, clicks: 12 },
  { month: 'Mar', pageViews: 45, clicks: 8 },
  { month: 'Apr', pageViews: 67, clicks: 15 },
  { month: 'May', pageViews: 48, clicks: 20 },
  { month: 'Jun', pageViews: 60, clicks: 12 },
  { month: 'Jul', pageViews: 40, clicks: 8 },
  { month: 'Aug', pageViews: 42, clicks: 10 },
  { month: 'Sep', pageViews: 85, clicks: 12 },
  { month: 'Oct', pageViews: 50, clicks: 28 },
  { month: 'Nov', pageViews: 62, clicks: 22 },
  { month: 'Dec', pageViews: 68, clicks: 30 },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <Alert variant="destructive" className="bg-orange-100">
              <span className="text-orange-800">
                We regret to inform you that our server is currently
                experiencing t...
              </span>
            </Alert>
            <div className="grid grid-cols-2 gap-6 mt-5">
              {cardData.map(
                (
                  {
                    icon,
                    title,
                    value,
                    change,
                    changePeriod,
                    textColor,
                    bgColor,
                  },
                  index
                ) => (
                  <Card key={index}>
                    <div className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 ${bgColor} rounded-lg`}>
                          {icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {title}
                          </p>
                          <h3 className="text-2xl font-bold">{value}</h3>
                          <p className={`text-sm ${textColor}`}>
                            {change}{' '}
                            <span className="text-muted-foreground">
                              {changePeriod}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
          <div>
            <div className="flex items-start justify-between">
              <Card className="w-[600px]">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Performance</h2>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm rounded-md bg-gray-100">
                        ALL
                      </button>
                      <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-100">
                        1M
                      </button>
                      <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-100">
                        6M
                      </button>
                      <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-100">
                        1Y
                      </button>
                    </div>
                  </div>
                  <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="pageViews"
                          name="Page Views"
                          fill="#ff6b00"
                        />
                        <Line
                          type="monotone"
                          dataKey="clicks"
                          name="Clicks"
                          stroke="#22c55e"
                          strokeWidth={2}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        {/* second part  */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <Card>
              <span className="p-4">Conversions</span>
              <div>
                <div className="flex flex-col items-center space-y-4">
                  <GaugeChart value={65.2} label="Returning Customer" />
                  <div className="grid grid-cols-2 w-full gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                      <p className="text-2xl font-semibold">23.5k</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Week</p>
                      <p className="text-2xl font-semibold">41.05k</p>
                    </div>
                  </div>
                  <Button variant="text" className="w-full bg-gray-50">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <span className="p-4">Sessions by Country</span>
              <div>
                <div className="flex flex-col space-y-4">
                  <WorldMap
                    countries={[
                      'Canada',
                      'United States',
                      'Brazil',
                      'Russia',
                      'China',
                    ]}
                    className="w-full aspect-[1.6/1]"
                  />
                  <div className="grid grid-cols-2 w-full gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                      <p className="text-2xl font-semibold">23.5k</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Week</p>
                      <p className="text-2xl font-semibold">41.05k</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div>
                <span className="flex flex-row items-center justify-between">
                  Top Pages
                  <Button size="sm" className="text-orange-800 bg-orange-50">
                    View All
                  </Button>
                </span>
              </div>
              <table>
                <div className="my-2">
                  <tr className="flex items-center justify-between">
                    <th>Page Path</th>
                    <th className="text-right">Page Views</th>
                    <th className="text-right">Exit Rate</th>
                  </tr>
                </div>
                <div>
                  {topPages.map((page) => (
                    <tr
                      key={page.path}
                      className="flex items-center justify-between ga4 py-2"
                    >
                      <th className="font-medium">{page.path}</th>
                      <th className="text-right">{page.views}</th>
                      <th className="text-right">
                        <span
                          className={`inline-block px-2 py-1 rounded-md text-xs ${
                            page.exitRate <= 5
                              ? 'bg-green-100 text-green-700'
                              : page.exitRate <= 15
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {page.exitRate}%
                        </span>
                      </th>
                    </tr>
                  ))}
                </div>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
