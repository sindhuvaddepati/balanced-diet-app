import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Alice",
      avatar: "🧑‍🦰",
      content: "What’s the best low-carb breakfast?",
      timestamp: "Just now",
      replies: [],
      tag: "Nutrition"
    },
    {
      id: 2,
      user: "Bob",
      avatar: "🧔",
      content: "How do you stay motivated for meal prep?",
      timestamp: "2 hours ago",
      replies: [],
      tag: "Motivation"
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [replyText, setReplyText] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          user: "You",
          avatar: "🙋‍♀️",
          content: newPost,
          replies: [],
          timestamp: "Just now",
          tag: "General"
        }
      ]);
      setNewPost("");
    }
  };

  const handleReplySubmit = (postId) => {
    if (replyText[postId]?.trim()) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                replies: [
                  ...post.replies,
                  {
                    user: "You",
                    content: replyText[postId],
                    avatar: "🙋‍♀️",
                    timestamp: "Just now"
                  }
                ]
              }
            : post
        )
      );
      setReplyText({ ...replyText, [postId]: "" });
      setReplyingTo(null);
    }
  };

  return (
    <div className="community-container">
      <h2>🌟 Community Forum</h2>

      <div className="new-post sticky">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="💬 Share something with the community..."
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>

      <div className="post-section">
        {posts.map((post) => (
          <div key={post.id} className="post fade-in">
            <div className="post-header">
              <span className="avatar">{post.avatar}</span>
              <div>
                <strong>{post.user}</strong>
                <p className="timestamp">{post.timestamp}</p>
              </div>
              <span className="tag">{post.tag}</span>
            </div>
            <p className="post-content">{post.content}</p>
            <button className="reply-btn" onClick={() => setReplyingTo(post.id)}>Reply</button>

            {replyingTo === post.id && (
              <div className="reply-input fade-in">
                <textarea
                  value={replyText[post.id] || ""}
                  onChange={(e) => setReplyText({ ...replyText, [post.id]: e.target.value })}
                  placeholder="✏️ Write a reply..."
                />
                <button onClick={() => handleReplySubmit(post.id)}>Submit Reply</button>
              </div>
            )}

            {post.replies.length > 0 && (
              <div className="replies">
                {post.replies.map((reply, index) => (
                  <div key={index} className="reply">
                    <span className="avatar">{reply.avatar}</span>
                    <div>
                      <strong>{reply.user}</strong> <p className="timestamp">{reply.timestamp}</p>
                      <p>{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
