import UserPost from './UserPost/UserPost';

function Posts({ posts }) {
    return (
        <div>
            {posts.map((post, index) => (
                <UserPost
                    key={index}
                    title={post.title}
                    author={post.author}
                    content={post.content}
                    qntdComentarios={post.qntdComentarios}
                    qntdCurtidas={post.qntdCurtidas}
                />
            ))}
        </div>
    );
}

export default Posts;
