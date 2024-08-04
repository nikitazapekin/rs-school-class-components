 
import { useRouter } from 'next/router';
export async function getServerSideProps(context) {
  const { page = 1 } = context.params;
  const res = await fetch(`http://localhost:3000/api/items?page=${page}&limit=10`);
  const data = await res.json();

  return {
    props: {
      items: data.items,
      currentPage: parseInt(page),
      totalPages: data.totalPages,
    },
  };
}

const ItemsPage = ({ items, currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/items/${page}`);
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;




/*
// pages/items/[page].js
import { useRouter } from 'next/router';

// pages/api/items.js
  async function handler(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  // Подключение к базе данных и получение данных с пагинацией
  const items = await getItemsFromDatabase(offset, limit);
  const totalItems = await countTotalItems();

  res.status(200).json({
    items,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
  });
}

export async function getServerSideProps(context) {
  const { page = 1 } = context.params;
  const res = await fetch(`http://localhost:3000/api/items?page=${page}&limit=10`);
  const data = await res.json();

  return {
    props: {
      items: data.items,
      currentPage: parseInt(page),
      totalPages: data.totalPages,
    },
  };
}

const ItemsPage = ({ items, currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/test/${page}`);
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;

*/


/*
export async function getPosts() {

  const res = await fetch('https://api.example.com/...');
  return res.json();

}

import BlogPostList from '../components/BlogPostList'
 

export async function getPosts() {

  const res = await fetch('https://api.example.com/...');
  return res.json();

}

 
export default async function Home() {

  const posts = await getPosts(); 

  return (
    <div>
      <BlogPostList posts={posts}/>
    </div>
    
  )
}
*/


/*
// pages/index.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { page = 1 } = context.query;
  const per_page = 10;
console.log(page)
  const response = await axios.get(`https://api.github.com/users`, {
    params: { page, per_page }
  });

  return {
    props: {
      users: response.data,
      page: Number(page),
      per_page
    }
  };
}

export default function Home({ users, page, per_page }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`/test?page=${newPage}`);
  };

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
          {users.login}
          </li>
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        <span>Page {currentPage}</span>
        {users.length === per_page && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
*/

/* 
// pages/users.js
import React from 'react';
import Link from 'next/link';

const Users = ({ users, page }) => {
  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {page > 1 && (
          <Link href={`/test?page=${page - 1}`}>
          Previous
          </Link>
        )}
        <Link href={`/test?page=${page + 1}`}>
        Next
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { page = 1 } = context.query;

  try {
    const res = await fetch(`https://api.github.com/users?per_page=10&page=${page}`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const users = await res.json();

    return {
      props: {
        users,
        page: Number(page),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        users: [],
        page: Number(page),
      },
    };
  }
}

export default Users;


*/





/*
import { useRouter } from 'next/router';

async function getPostsByPage(page) {
  
  const postsPerPage = 5;
  const totalPosts = 50;  
  const posts = Array.from({ length: postsPerPage }, (_, i) => ({
    id: i + 1 + (page - 1) * postsPerPage,
    title: `Post ${i + 1 + (page - 1) * postsPerPage}`
  }));

  return {
    posts,
    totalPages: Math.ceil(totalPosts / postsPerPage)
  };
}

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page, 10) || 1;  
  console.log("PAG", page)
  const response = await fetch(`https://api.github.com/users?per_page=${10}&page=${page}`);
  const users = await response.json();

  console.log("USERRRRRRRRRRRRRSS", users[0])
  const { posts, totalPages } = await getPostsByPage(page);

  return {
    props: { posts, page, totalPages }
  };
}

export default function PostsPage({ posts, page, totalPages }) {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      router.push(`/test?page=${newPage}`);
    }
  };

  return (
    <div>
      <h1>Posts - Page {page}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
} 

*/