import { ArrowRight, Search, Users, Monitor } from 'lucide-react';

export default function AdminHelpCenter() {
  const categories = [
    {
      title: 'Getting Started with Larkon',
      description:
        'Welcome to Larkon Dive into basic for a swift on boarding experience',
      icon: ArrowRight,
      author: {
        name: 'Aston Martin',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '19 Video',
      },
    },
    {
      title: 'Admin Settings',
      description:
        'Learn how to manage your current workspace or your enterprise space',
      icon: Users,
      author: {
        name: 'Michael A. Miner',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '10 Video',
      },
    },
    {
      title: 'Server Setup',
      description:
        'Connect, simplify, and automate. Discover the power of apps and tools.',
      icon: Monitor,
      author: {
        name: 'Theresa T. Brose',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
    {
      title: 'Login And Verification',
      description:
        'Read on to learn how to sign in with your email address, or your Apple or Google.',
      icon: Monitor,
      author: {
        name: 'by James L. Erickson',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
    {
      title: 'Account Setup',
      description:
        'Connect, simplify, and automate. Discover the power of apps and tools.',
      icon: Monitor,
      author: {
        name: 'Theresa T. Brose',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
    {
      title: 'Trust & Safety',
      description:
        'Connect, simplify, and automate. Discover the power of apps and tools.',
      icon: Monitor,
      author: {
        name: 'Theresa T. Brose',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
    {
      title: 'Channel Setup',
      description:
        'Connect, simplify, and automate. Discover the power of apps and tools.',
      icon: Monitor,
      author: {
        name: 'Theresa T. Brose',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
    {
      title: 'Permissions',
      description:
        'Connect, simplify, and automate. Discover the power of apps and tools.',
      icon: Monitor,
      author: {
        name: 'Theresa T. Brose',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
    {
      title: 'Billing Help',
      description:
        'Connect, simplify, and automate. Discover the power of apps and tools.',
      icon: Monitor,
      author: {
        name: 'Theresa T. Brose',
        avatar: '/placeholder.svg?height=40&width=40',
        videoCount: '07 Video',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 px-6 sm:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a2e3d,#2d4a63)] opacity-90"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Help Center</h1>
          <p className="text-slate-300 mb-4">How can we help you ?</p>

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

      {/* Categories Grid */}
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg hover:shadow-md transition-shadow p-6 border shadow-lg"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-6">
                <category.icon className="h-6 w-6 text-red-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">{category.description}</p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={category.author.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    by {category.author.name}
                  </p>
                  <p className="text-sm text-red-500">
                    {category.author.videoCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
