import React from "react";

// card component styling
export default function Task() {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Task title</h5>
        <p class="card-text">Task description.</p>
        <a href="#" class="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
}
