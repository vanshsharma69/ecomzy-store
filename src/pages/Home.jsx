import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching data:");
      setPost([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-11/12 max-w-7xl mx-auto mb-10 py-16 "> 
      {
        loading ? (
          <Spinner />
        ) : (
          post.length > 0 ? (
            <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {post.map((post) => (
                <Product key={post.id} post={post} />
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
