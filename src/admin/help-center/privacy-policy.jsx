import { Search } from 'lucide-react';

const AdminPrivacyPolicy = () => {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 px-6 sm:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a2e3d,#2d4a63)] opacity-90"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-300 mb-4">
            Our code of conduct and your pledge to be an upstanding member of
            the product
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full mt-5">
        <div className=" shadow-lg p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Introduction</h1>
          <p className="text-sm">
            TechFusion Solutions Inc. respects your privacy and is committed to
            protecting it through our compliance with this policy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our SaaS product, TechFusion Suite,
            available at www.techfusion.com or through our applications and
            services . Please read this privacy policy carefully to understand
            our policies and practices regarding your information and how we
            will treat it.
          </p>
        </div>
        <div className=" shadow-lg p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Information We Collect</h1>
          <p className="text-sm">
            TechFusion Solutions Inc. respects your privacy and is committed to
            protecting it through our compliance with this policy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our SaaS product, TechFusion Suite,
            available at www.techfusion.com or through our applications and
            services . Please read this privacy policy carefully to understand
            our policies and practices regarding your information and how we
            will treat it.
          </p>
        </div>
        <div className=" shadow-lg p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Our role in your privacy</h1>
          <p className="text-sm">
            TechFusion Solutions Inc. respects your privacy and is committed to
            protecting it through our compliance with this policy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our SaaS product, TechFusion Suite,
            available at www.techfusion.com or through our applications and
            services . Please read this privacy policy carefully to understand
            our policies and practices regarding your information and how we
            will treat it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPrivacyPolicy;
