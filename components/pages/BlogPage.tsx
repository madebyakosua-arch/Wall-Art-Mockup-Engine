import React from 'react';

export const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "How to Increase Etsy Sales with Better Mockups",
      excerpt: "Learn why visual presentation is the #1 factor in conversion rates for wall art sellers.",
      date: "Oct 12, 2024",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Top 5 Interior Design Trends for 2025",
      excerpt: "What buyers are looking for this year: from Japandi to Maximalism.",
      date: "Sep 28, 2024",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Video Mockups vs Static Images: A Case Study",
      excerpt: "We analyzed 10,000 listings to see which format drives more engagement.",
      date: "Sep 15, 2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">The Mockup Blog</h1>
            <p className="text-lg text-slate-600">Tips, trends, and strategies for art sellers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover" 
                        loading="lazy" 
                    />
                    <div className="p-6">
                        <div className="text-sm text-brand-600 font-medium mb-2">{post.date}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h3>
                        <p className="text-slate-600 mb-4">{post.excerpt}</p>
                        <a href="#" className="text-slate-900 font-medium hover:text-brand-600">Read more &rarr;</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};