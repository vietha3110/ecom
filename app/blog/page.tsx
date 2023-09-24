// Define a type for your blog post
interface Post {
    id: number;
    title: string;
}

interface Data {
    posts: Array<Post>
}


export default async function Blog() {
    const response = await fetch('https://dummyjson.com/posts')
    const json = await response.json();
    const data = json as Data;
    const posts = data.posts;
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    )
}
