import { Avatar, Button, Card, Radio } from '@material-tailwind/react';
import { Package, User, LogOut } from 'lucide-react';

function DashBoard() {
  return (
    <div className="flex min-h-screen bg-gray-50/50 gap-6 px-4 md:px-5 lg:px-10 xl:px-24 flex-wrap">
      {/* Sidebar */}
      <div className="w-80 bg-white">
        <div className="flex items-center gap-3 mb-8 border bg-white rounded-lg p-2">
          <Avatar className="h-12 w-12" src="/placeholder.svg" />

          <div>
            <div className="text-sm text-muted-foreground">Hello,</div>
            <div className="font-medium">Ravinder Dhilloon</div>
          </div>
        </div>

        <nav className="space-y-2 border bg-white rounded-lg p-2">
          <Button variant="filled" className="w-full justify-start gap-2">
            <Package className="h-4 w-4" />
            MY ORDERS
          </Button>
          <hr />
          <Button variant="ghost" className="w-full justify-start gap-2">
            <User className="h-4 w-4" />
            ACCOUNT SETTINGS
          </Button>
          <div className="">
            <div className="text-blue-600 font-medium px-3 py-2">
              Profile Information
            </div>
            <Button variant="ghost" className="w-full justify-start px-3">
              Manage Addresses
            </Button>
          </div>
          <hr />
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Card className="max-w-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Personal Information</h2>
            <Button variant="ghost" className="text-blue-600 h-auto p-0">
              Edit
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <input
                  defaultValue="Ravinder"
                  className="bg-gray-50"
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <input
                  defaultValue="Dhilloon"
                  className="bg-gray-50"
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <label>Your Gender</label>
              <Radio name="Male" />
              <Radio name="Female" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label>Email Address</label>
                <Button variant="ghost" className="text-blue-600 h-auto p-0">
                  Edit
                </Button>
              </div>
              <input
                defaultValue="rs504510@gmail.com"
                className="bg-gray-50"
                readOnly
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label>Mobile Number</label>
                <Button variant="ghost" className="text-blue-600 h-auto p-0">
                  Edit
                </Button>
              </div>
              <input
                defaultValue="+918814930229"
                className="bg-gray-50"
                readOnly
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DashBoard;
