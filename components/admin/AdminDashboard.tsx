import React from 'react';
import { Users, DollarSign, TrendingUp, Activity, Settings, Bell } from 'lucide-react';
import { Button } from '../ui/Button';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Overview</h1>
            <p className="text-slate-500">Welcome back, Administrator.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="secondary" size="sm" className="bg-white">
                <Bell size={18} className="mr-2" /> Notifications
             </Button>
             <Button variant="primary" size="sm">
                <Settings size={18} className="mr-2" /> Settings
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-slate-900">$24,500</h3>
                </div>
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                    <DollarSign size={20} />
                </div>
             </div>
             <span className="text-green-600 text-sm font-medium flex items-center">
                <TrendingUp size={14} className="mr-1" /> +12% from last month
             </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">Active Users</p>
                    <h3 className="text-2xl font-bold text-slate-900">1,234</h3>
                </div>
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Users size={20} />
                </div>
             </div>
             <span className="text-green-600 text-sm font-medium flex items-center">
                <TrendingUp size={14} className="mr-1" /> +5% new users
             </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">Mockups Generated</p>
                    <h3 className="text-2xl font-bold text-slate-900">85.2k</h3>
                </div>
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                    <Activity size={20} />
                </div>
             </div>
             <span className="text-slate-500 text-sm">
                Total lifetime generations
             </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">Conversion Rate</p>
                    <h3 className="text-2xl font-bold text-slate-900">4.2%</h3>
                </div>
                <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                    <TrendingUp size={20} />
                </div>
             </div>
             <span className="text-green-600 text-sm font-medium flex items-center">
                <TrendingUp size={14} className="mr-1" /> +0.8% this week
             </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Users Table */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900">Recent Transactions</h3>
                    <button className="text-sm text-brand-600 hover:underline">View all</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                            <tr>
                                <th className="px-6 py-3">User</th>
                                <th className="px-6 py-3">Plan</th>
                                <th className="px-6 py-3">Amount</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="bg-white border-b border-slate-100 hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">user_{i}@example.com</td>
                                    <td className="px-6 py-4">Pro Plan</td>
                                    <td className="px-6 py-4">$49.00</td>
                                    <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Paid</span></td>
                                    <td className="px-6 py-4">Oct {10 + i}, 2025</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* System Status / Quick Actions */}
            <div className="space-y-6">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h3 className="font-bold text-slate-900 mb-4">System Status</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">GPU Clusters</span>
                            <span className="flex items-center text-green-600 text-sm font-medium"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Operational</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">API Gateway</span>
                            <span className="flex items-center text-green-600 text-sm font-medium"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Operational</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Storage (S3)</span>
                            <span className="flex items-center text-green-600 text-sm font-medium"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> 45% Used</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start text-sm">Add New Room Scene</Button>
                        <Button variant="outline" className="w-full justify-start text-sm">Create Blog Post</Button>
                        <Button variant="outline" className="w-full justify-start text-sm">Export User Data</Button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};