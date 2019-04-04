import React, { Component } from "react";
import "./FeedPost.css";

class FeedPost extends Component {
  getDate(date) {
    const dateString = new Date(date).toLocaleDateString("pt-BR");
    const timeString = new Date(date).toLocaleTimeString("pt-BR");
    return `${dateString} ${timeString}`;
  }
  render() {
    const post = this.props.post;
    return (
      <div className="card mb-4">
        <div class="card-header">@{post.user.username}</div>
        <div className="card-body">
          <p className="card-text">{post.text}</p>
        </div>
        <div className="card-footer text-muted">
          Publicado em {this.getDate(post.createdAt)}
        </div>
      </div>
    );
  }
}

export default FeedPost;
