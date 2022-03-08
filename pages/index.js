import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components/index'
import { getPosts } from '../services/index'

const posts = [
  { title: 'Reactのテスト方法', excerpt: 'Reactのテストの方法を学びます' },
  {
    title: 'ReactとTailwindcss',
    excerpt: 'ReactとTailWindcssの使い方を学びます',
  },
]

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
