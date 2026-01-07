import React from 'react';
import { Code, Terminal } from 'lucide-react';

export const ApiPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Developer API</h1>
            <p className="text-lg text-slate-600">Integrate our mockup generation engine directly into your POD workflow.</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-8 text-slate-300 font-mono text-sm shadow-2xl overflow-hidden relative">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-slate-500">bash — curl</span>
            </div>
            <pre className="overflow-x-auto">
{`curl -X POST https://api.wallartengine.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "imageUrl": "https://your-site.com/art.jpg",
    "roomId": "modern-living-room-01",
    "frameColor": "oak"
  }'`}
            </pre>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-200 rounded-xl">
                <div className="bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 mb-4">
                    <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rest API</h3>
                <p className="text-slate-600 mb-4">Full programmatic access to all generation features, asset libraries, and account management.</p>
                <a href="#" className="text-brand-600 font-medium hover:underline">Read Documentation &rarr;</a>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
                 <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">SDKs & Libraries</h3>
                <p className="text-slate-600 mb-4">Official client libraries for Node.js, Python, and PHP to get you started faster.</p>
                <a href="#" className="text-brand-600 font-medium hover:underline">View Libraries &rarr;</a>
            </div>
        </div>
      </div>
    </div>
  );
};