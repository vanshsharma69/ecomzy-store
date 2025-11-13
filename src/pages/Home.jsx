import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPost(data);
      setFiltered(data); // default
    } catch (error) {
      console.error("Error fetching data:");
      setPost([]);
      setFiltered([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  // Filter logic
  useEffect(() => {
    let results = post;

    // Search filter
    if (search.trim() !== "") {
      results = results.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category !== "all") {
      results = results.filter((item) => item.category === category);
    }

    setFiltered(results);
  }, [search, category, post]);

  return (
    <div className="w-11/12 max-w-7xl mx-auto mb-10 py-16">

      {/* SEARCH + CATEGORY BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded-md shadow-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-1/4 px-4 py-2 border rounded-md shadow-sm outline-none"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewellery</option>
          <option value="electronics">Electronics</option>
        </select>

      </div>

      {/* PRODUCT GRID */}
      {
        loading ? (
          <Spinner />
        ) : (
          filtered.length > 0 ? (
            <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((item) => (
                <Product key={item.id} post={item} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center min-h-[60vh]">
              <p className="text-gray-500 text-lg font-medium">No products found</p>
            </div>
          )
        )
      }
    </div>
  );
};

export default Home;
