import React from 'react';
import { ShoppingBag, Printer, Palette } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      role: "Etsy & Marketplace Sellers",
      desc: "Stand out in crowded search results with listing photos that stop the scroll.",
      icon: ShoppingBag,
      color: "bg-orange-100 text-orange-600"
    },
    {
      role: "Print on Demand Artists",
      desc: "Test new designs on products quickly without ordering samples every time.",
      icon: Printer,
      color: "bg-blue-100 text-blue-600"
    },
    {
      role: "Interior Design Brands",
      desc: "Showcase your collections in high-end, trending interior styles.",
      icon: Palette,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Built for modern wall art businesses</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
                <div key={i} className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                    <div className={`p-3 rounded-lg ${c.color} mb-4`}>
                        <c.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{c.role}</h3>
                    <p className="text-slate-600">{c.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};