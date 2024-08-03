// pages/test/index.jsx

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

  // Получаем данные для текущей страницы
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

/*import { useState } from 'react';
import axios from 'axios';

export async function getServerSideProps(context) {
  const { query } = context;
  const page = query.page || 1;
  const limit = 10;

  const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);
  const users = res.data;

  return {
    props: {
      users,
      page: parseInt(page, 10),
    },
  };
}

export default function Home({ users, page }) {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.location.href = `/?page=${newPage}`;
  };

  return (
    <div>
      <h1>GitHub Users</h1>
      <div className="card-container">
        {users.map(user => (
          <div key={user.id} className="card">
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <h2>{user.login}</h2>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Prev
        </button>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .card {
          border: 1px solid #ddd;
          padding: 16px;
          border-radius: 8px;
          text-align: center;
          width: 150px;
        }
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .pagination {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          width: 200px;
        }
        button {
          padding: 8px 16px;
          font-size: 16px;
          cursor: pointer;
        }
        button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
  */


/*import { useState, useEffect } from 'react';

export default function Home({ initialData }) {
  const [limit, setLimit] = useState('30');
  const [offset, setOffset] = useState('1');
  const [data, setData] = useState(initialData);

  const fetchData = async (limit, offset) => {
    const response = await fetch(`/api/get-users?limit=${limit}&offset=${offset}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData(limit, offset);
  }, [limit, offset]);

  return (
    <div>
      <h1>GitHub Users</h1>
      <div>
        <label>
          Limit:
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </label>
        <label>
          Offset:
          <input
            type="number"
            value={offset}
            onChange={(e) => setOffset(e.target.value)}
          />
        </label>
      </div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}
// pages/api/get-users.js
  async function handler(req, res) {
  const { limit = 30, offset = 1 } = req.query;
  const response = await fetch(`https://api.github.com/users?page=${offset}&per_page=${limit}`);
  const data = await response.json();
  
  res.status(200).json(data);
}

// getServerSideProps remains the same
export async function getServerSideProps(context) {
  const { limit = 30, offset = 1 } = context.query;
  const response = await fetch(`https://api.github.com/users?page=${offset}&per_page=${limit}`);
  const data = await response.json();

  return {
    props: {
      initialData: data,
    },
  };
}

*/

/* import { useState } from 'react';

export default function Home({ initialData }) {
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');
  const [data, setData] = useState(initialData);

   

  return (
    <div>
      <h1>GitHub Users</h1>
      <div>
        <label>
          Limit:
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </label>
        <label>
          Offset:
          <input
            type="number"
            value={offset}
            onChange={(e) => setOffset(e.target.value)}
          />
        </label>
      
      </div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { limit = 30, offset = 1 } = context.query;
  const response = await fetch(`https://api.github.com/users?page=${offset}&per_page=${limit}`);
  const data = await response.json();

  return {
    props: {
      initialData: data,
    },
  };
}

*/

/*import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main style={{ position: 'relative', top: '300px' }}>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}
*/
/*import { useState } from 'react';

export default function Home({ initialData }) {
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');
  const [data, setData] = useState(initialData);

  const handleFetch = async () => {
    const response = await fetch(`/api/fetchData?limit=${limit}&offset=${offset}`);
    const newData = await response.json();
    setData(newData);
  };

  return (
    <div>
      <h1>GitHub Users</h1>
      <div>
        <label>
          Limit:
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </label>
        <label>
          Offset:
          <input
            type="number"
            value={offset}
            onChange={(e) => setOffset(e.target.value)}
          />
        </label>
        <button onClick={handleFetch}>Fetch Data</button>
      </div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { limit = 30, offset = 1 } = context.query;
  const response = await fetch(`https://api.github.com/users?page=${offset}&per_page=${limit}`);
  const data = await response.json();

  return {
    props: {
      initialData: data,
    },
  };
}

export default async function handler(req, res) {
  const { limit, offset } = req.query;

  const response = await fetch(`https://api.github.com/users?page=${offset}&per_page=${limit}`);
  const data = await response.json();

  res.status(200).json(data);
}
*/

/*
import React, { useState } from 'react';

const Posts = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      const newPosts = await res.json();
      setPosts(newPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div style={{ position: 'relative', top: '300px' }}>
      <h1>Posts</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    console.error('Failed to fetch initial posts');
    return {
      props: {
        initialPosts: [],
      },
    };
  }
  const posts = await res.json();
  console.log(posts[0]);
  return {
    props: {
      initialPosts: posts,
    },
  };
};

export default Posts;

*/



/*import React, { useState } from 'react';

const Posts = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const newPosts = await res.json();
    setPosts(newPosts);
  };

  return (
    <div style={{ position: 'relative', top: '300px' }}>
      <h1>Posts</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  console.log(posts[0]);
  return {
    props: {
      initialPosts: posts,
    },
  };
};

export default Posts;
*/

/*
import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div  style={{position: "relative", top: "300px"}}>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};



export const getServerSideProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
console.log(posts)
  return {
    props: {
      posts,
    },
  };
};


export default Posts;
*/


/*
import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div  style={{position: "relative", top: "300px"}}>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  // Замените URL на адрес вашего API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
*/







/*import React from 'react';

function Page({ data }) {
  return (
    <>
	<div style={{position: "relative", top: "300px"}}>

      <h1>{data.title}</h1>
      <p>{data.body}</p>
	</div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://example.com/data');

    // Check if the content type is JSON
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid content-type. Expected application/json');
    }

    const data = await res.json();

    // Additional check to ensure 'data' is an object
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid JSON response');
    }

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        data: { title: 'Error', body: 'Failed to load data' },
      },
    };
  }
}

export default Page;
*/
/*import { GetServerSideProps } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';

type UserDataArray = Array<{
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}>;

interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArray;
}

async function fetchUserData(url: string): Promise<UserDataArray> {
	try {
		const response: AxiosResponse<UserDataArray> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		throw new Error('Error fetching data');
	}
}

async function fetchUserDataAdvanced(url: string): Promise<UserData> {
	try {
		const response: AxiosResponse<UserData> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		throw new Error('Error fetching data');
	}
}

interface Props {
	users: UserDataArray;
}

const UserPage: React.FC<Props> = ({ users }) => {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<a href={user.html_url}>
							<img src={user.avatar_url} alt={user.login} width={50} />
							<p>{user.login}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { limit = '10', offset = '1', typedValue = '' } = context.query;

	let typedValueString: string;
	if (Array.isArray(typedValue)) {
		typedValueString = typedValue[0]; // Assuming you only need the first value if it's an array
	} else {
		typedValueString = typedValue;
	}

	let url: string;
	if (typedValueString.trim() === '') {
		url = `https://api.github.com/users?page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserData(url);
			return {
				props: {
					users: data,
				},
			};
		} catch (error) {
			console.error(error);
			return {
				props: {
					users: [],
				},
			};
		}
	} else {
		url = `https://api.github.com/search/users?q=${typedValueString}&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			return {
				props: {
					users: data.items,
				},
			};
		} catch (error) {
			console.error(error);
			return {
				props: {
					users: [],
				},
			};
		}
	}
};

export default UserPage;

*/


/* import axios, { AxiosError, AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';

// Define the UserDataArray and UserData types
type UserDataArray = Array<{
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}>;

interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArray;
}

// Fetch user data function
async function fetchUserData(url: string): Promise<UserDataArray> {
	try {
		const response: AxiosResponse<UserDataArray> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		throw new Error('Error fetching data');
	}
}

// Fetch advanced user data function
async function fetchUserDataAdvanced(url: string): Promise<UserData> {
	try {
		const response: AxiosResponse<UserData> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		throw new Error('Error fetching data');
	}
}

// Page component
interface Props {
	users: UserDataArray;
}

// The page component itself
const UserPage: React.FC<Props> = ({ users }) => {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<a href={user.html_url}>
							<img src={user.avatar_url} alt={user.login} width={50} />
							<p>{user.login}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

// Server-side function to fetch data
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { limit = '10', offset = '1', typedValue = '' } = context.query;

	let url: string;
   // if(typedValue) {
	if ( typedValue.trim() === '') {
		url = `https://api.github.com/users?page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserData(url);
			return {
				props: {
					users: data,
				},
			};
		} catch (error) {
			console.error(error);
			return {
				props: {
					users: [],
				},
			};
		}
	} else {
		url = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			return {
				props: {
					users: data.items,
				},
			};
		} catch (error) {
			console.error(error);
			return {
				props: {
					users: [],
				},
			};
		}
	}


//}
};

export default UserPage;
*/