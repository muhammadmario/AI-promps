import React from "react";
import PrompCard from "./PrompCard";

function Profile({ desc, name, data, handleEdit, handleDelete }) {
  return (
    <section className="w-full">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{name}</span> Profile
      </h1>
      <p className="desc text_left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PrompCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
}

export default Profile;
