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
                    userCommentText={post.userCommentText}
                    userCommentName={post.userCommentName}
                    userCommentText2={post.userCommentText2}
                    userCommentName2={post.userCommentName2}
                    userCommentText3={post.userCommentText3}
                    userCommentName3={post.userCommentName3}
                />
            ))}
        </div>
    );
}

export default Posts;
