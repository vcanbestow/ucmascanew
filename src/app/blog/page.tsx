"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Sparkles 
} from "lucide-react";

const CATEGORIES = ["All", "STEM", "Abacus", "Pedagogy", "Campus Updates"];

const MOCK_BLOG_POSTS = [
  {
    id: 1,
    slug: "unlocking-spatial-intelligence-through-abacus",
    title: "Unlocking Spatial Intelligence Through Abacus Training",
    category: "Abacus",
    excerpt: "Discover how target arithmetic structures mapping abacus methodologies drastically accelerate visual processing speeds in early adolescent minds.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    date: "July 12, 2026",
    author: "Dr. Elena Rostova",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Autonomous Mini-Robotics in K-12",
    slug: "future-of-autonomous-mini-robotics-k12",
    category: "STEM",
    excerpt: "Integrating microcontroller architecture arrays within standard classrooms shifts active learner paradigms toward hardware compilation mastery.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    date: "July 08, 2026",
    author: "Marcus Vance",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Designing Sandbox Matrices for Software Exploration",
    slug: "designing-sandbox-matrices-software-exploration",
    category: "STEM",
    excerpt: "An empirical deep dive into building virtual development sandboxes engineered for foundational logic validation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    date: "June 28, 2026",
    author: "Sarah Jenkins",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Nurturing Computational Leadership Paradigms",
    slug: "nurturing-computational-leadership-paradigms",
    category: "Campus Updates",
    excerpt: "Highlighting standard outcomes achieved across our 2026 Global Leadership Seminar matrix platforms.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
    date: "June 15, 2026",
    author: "Principal David Vance",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Kinesthetic Methodologies in Early Arithmetic",
    slug: "kinesthetic-methodologies-early-arithmetic",
    category: "Pedagogy",
    excerpt: "Why tactile spatial counters outpace pure software visualizer configurations during foundational arithmetic formation windows.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
    date: "June 02, 2026",
    author: "Prof. Alan Turing",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Cross-Department Functional Structural Testing",
    slug: "cross-department-functional-structural-testing",
    category: "Campus Updates",
    excerpt: "A comprehensive analysis showcasing collaborative engineering outcomes heading into regional innovation leagues.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
    date: "May 24, 2026",
    author: "Emily Watson",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "Cognitive Processing Load: Digital vs Analog Tools",
    slug: "cognitive-processing-load-digital-analog",
    category: "Pedagogy",
    excerpt: "Evaluating brain state telemetry benchmarks to balance tactical screen breaks with active development cycles.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
    date: "May 10, 2026",
    author: "Dr. Elena Rostova",
    readTime: "9 min read"
  }
];

const ITEMS_PER_PAGE = 6;

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Processing
  const filteredPosts = useMemo(() => {
    setCurrentPage(1); // Reset to page 1 when criteria shifts
    return MOCK_BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination Math Operations
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      
      {/* Editorial Editorial Banner */}
      <div className="relative bg-slate-900 overflow-hidden py-24 px-4 sm:px-8 md:px-16 text-center border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] bg-size-[16px_16px]" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Cognitive Hub & Updates
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            The Knowledge <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500 italic">Matrix</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            Deep technical insights, computational learning frameworks, and localized pedagogical milestones designed for modern intellect structures.
          </p>
        </div>
      </div>

      <div className="my-container mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-8">
        
        {/* Sorting Controller & Search Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Categories Filter (Left Side) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              Sort:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-linear-to-r from-amber-500 to-orange-600 text-white shadow-[0_4px_14px_rgba(245,158,11,0.25)] scale-105"
                    : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar (Right Side) */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Filter articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Dynamic Post Grid Pipeline */}
        <AnimatePresence mode="popLayout">
          {paginatedPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full py-24 border border-dashed border-slate-300 rounded-2xl text-center bg-white flex flex-col items-center justify-center"
            >
              <BookOpen className="w-10 h-10 text-slate-300 mb-2" />
              <p className="text-sm font-bold text-slate-400">No matching educational dispatches indexed</p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
                >
                  {/* Premium Hover Interactive Image Window */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <span className="absolute top-4 left-4 z-10 text-[xs] font-black uppercase tracking-wider text-slate-900 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm">
                      {post.category}
                    </span>
                    <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-black uppercase text-amber-600 group/link hover:text-orange-600 transition-colors"
                      ><Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                    /></Link>
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Context Block Area */}
                  <div className="p-6 flex flex-col grow justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-black uppercase text-amber-600 group/link hover:text-orange-600 transition-colors"
                      >
                        Read Post
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination Action Controls Grid Row */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-200">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-colors text-slate-600"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                  currentPage === pageNumber
                    ? "bg-slate-900 text-white shadow-md font-black"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-colors text-slate-600"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}