import React from 'react';
import { Calendar, User, ArrowRight, Clock, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const BlogPage: React.FC = () => {
  const featuredPost = {
    title: "How to Increase Etsy Sales with Better Mockups",
    excerpt: "Learn why visual presentation is the #1 factor in conversion rates for wall art sellers. We analyzed over 5,000 shops to bring you this data-driven guide.",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    author: "Akosua",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200",
    category: "Selling Tips"
  };

  const posts = [
    {
      title: "Top 5 Interior Design Trends for 2025",
      excerpt: "What buyers are looking for this year: from Japandi to Maximalism. Stay ahead of the curve.",
      date: "Sep 28, 2024",
      readTime: "5 min read",
      author: "Sarah J.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      category: "Trends"
    },
    {
      title: "Video Mockups vs Static Images: A Case Study",
      excerpt: "We analyzed 10,000 listings to see which format drives more engagement and sales.",
      date: "Sep 15, 2024",
      readTime: "6 min read",
      author: "Mike R.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      category: "Case Study"
    },
    {
      title: "The Ultimate Guide to Print-on-Demand SEO",
      excerpt: "Mockups get the click, but SEO gets the view. Here is how to optimize your listings.",
      date: "Sep 02, 2024",
      readTime: "12 min read",
      author: "Akosua",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800",
      category: "Marketing"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Blog Hero */}
      <div className="bg-white border-b border-slate-200 pb-16 pt-8 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">Resources & Guides</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Mockup Blog</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Expert tips on selling art online, interior design trends, and scaling your print-on-demand business.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Post */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <StarIcon className="text-yellow-500 fill-yellow-500" /> Featured Article
            </h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="md:w-1/2 overflow-hidden">
                    <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-sm">
                        <span className="bg-brand-100 text-brand-700 font-bold px-3 py-1 rounded-full">{featuredPost.category}</span>
                        <span className="text-slate-500 flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                        {featuredPost.title}
                    </h3>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                             <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                                <User size={16} />
                             </div>
                             {featuredPost.author}
                        </div>
                        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-brand-700">
                            Read Article <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                                {post.category}
                            </span>
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                loading="lazy" 
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-400">By {post.author}</span>
                                <span className="text-brand-600 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                                    Read <ArrowRight size={14} className="ml-1" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-slate-900 rounded-2xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <Mail size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Join 10,000+ Smart Sellers</h2>
                <p className="text-slate-300 mb-8">
                    Get the latest design trends, selling tips, and exclusive free mockups delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="flex-1 px-5 py-3 rounded-lg border-0 focus:ring-2 focus:ring-brand-500 outline-none text-slate-900"
                    />
                    <Button variant="primary" className="whitespace-nowrap">
                        Subscribe Free
                    </Button>
                </form>
                <p className="text-xs text-slate-500 mt-4">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

// Helper Icon
const StarIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);