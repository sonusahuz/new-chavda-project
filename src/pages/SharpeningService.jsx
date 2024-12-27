import { Button, Card, Input, Option, Select } from '@material-tailwind/react';

const SharpeningService = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#006400] py-16 text-center">
        <h1 className="text-white text-5xl font-bold">Sharpening Service</h1>
      </header>

      <div
        className="bg-cover bg-center px-4 md:px-5 lg:px-10 xl:px-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/images/about/about-background.jpeg')`,
        }}
      >
        <main className="mx-auto py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="text-xl">
                We provide expert sharpening services for Router Cutters,
                Circular Saw Blades, and Garden tools; just drop them off at our
                store and let us handle the rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#006400] text-white p-6 rounded-3xl">
                <Card className="p-4">
                  <h2 className="text-3xl mb-8">Estimate</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="text-xl mb-2 block">
                        Quantity of Sawblades:
                      </label>
                      <Input
                        label=" Quantity of Sawblades"
                        type="number"
                        placeholder="Quantity -"
                        className="bg-white text-black"
                      />
                    </div>

                    <div>
                      <label className="text-xl mb-2 block">
                        Number of Teeth:
                      </label>
                      <Select label="Number of Teeth">
                        <Option value="16T">16T</Option>
                        <Option value="24T">24T</Option>
                        <Option value="32T">32T</Option>
                        <Option value="40T">40T</Option>
                        <Option value="48T">48T</Option>
                        <Option value="56T">56T</Option>
                        <Option value="60T">60T</Option>
                        <Option value="72T">72T</Option>
                        <Option value="96T">96T</Option>
                        <Option value="108T">108T</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="text-xl mb-2 block">
                        Number of Missing Tips:
                      </label>
                      <Input
                        label="Missing Tips"
                        type="number"
                        placeholder="Number -"
                        className="bg-white text-black"
                      />
                    </div>

                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-3 text-sm font-light">
                      Sawblade to Estimate →
                    </Button>
                  </div>
                </Card>
              </Card>

              <div className="relative h-[400px] md:h-auto">
                <img
                  src="./assets/images/services/sharpening-service.jpeg"
                  alt="Sharpening service demonstration showing sparks from grinding wheel"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharpeningService;
