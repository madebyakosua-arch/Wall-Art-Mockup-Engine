import React from 'react';
import { Image as ImageIcon, Video, Zap, Upload, Layout, Search, Download, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Studio</h1>
            <p className="text-slate-500">Manage your mockups and generate new assets.</p>
          </div>
          <div className="flex gap-3">
             <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-slate-900">100</span>
                <span className="text-slate-500 text-sm">Credits</span>
             </div>
             <Button variant="primary" size="md" className="shadow-lg shadow-brand-500/20">
                <Plus size={18} className="mr-2" /> New Project
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <ImageIcon size={24} />
             </div>
             <div>
                <p className="text-sm font-medium text-slate-500">Photo Mockups</p>
                <h3 className="text-2xl font-bold text-slate-900">12</h3>
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                <Video size={24} />
             </div>
             <div>
                <p className="text-sm font-medium text-slate-500">Video Reels</p>
                <h3 className="text-2xl font-bold text-slate-900">3</h3>
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                <Upload size={24} />
             </div>
             <div>
                <p className="text-sm font-medium text-slate-500">Storage Used</p>
                <h3 className="text-2xl font-bold text-slate-900">145 MB</h3>
             </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Layout size={18} className="text-slate-400" /> Recent Generations
                </h3>
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-md text-sm outline-none focus:border-brand-500" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {/* Project Card 1 */}
                <div className="group relative border border-slate-100 rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square bg-slate-100 relative overflow-hidden">
                        <img src="https://i.ibb.co/hFvWfqZg/flat-art-jpg.jpg" alt="Mockup" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button className="bg-white p-2 rounded-full text-slate-900 hover:scale-110 transition-transform"><Download size={16} /></button>
                        </div>
                    </div>
                    <div className="p-3">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Living Room - Modern</h4>
                        <p className="text-xs text-slate-500">Oct 24, 2025</p>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="group relative border border-slate-100 rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square bg-slate-100 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80" alt="Mockup" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button className="bg-white p-2 rounded-full text-slate-900 hover:scale-110 transition-transform"><Download size={16} /></button>
                        </div>
                    </div>
                    <div className="p-3">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Bedroom - Scandi</h4>
                        <p className="text-xs text-slate-500">Oct 22, 2025</p>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="group relative border border-slate-100 rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square bg-slate-100 relative overflow-hidden">
                         <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                            <Video size={32} />
                         </div>
                    </div>
                    <div className="p-3">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Reel - Reveal</h4>
                        <p className="text-xs text-slate-500">Processing...</p>
                    </div>
                </div>

                 {/* New Project Placeholder */}
                 <div className="border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-brand-400 hover:bg-brand-50/10 transition-colors h-full min-h-[200px]">
                    <Plus size={32} className="text-slate-300 mb-2" />
                    <span className="text-sm font-bold text-slate-500">Create New</span>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};