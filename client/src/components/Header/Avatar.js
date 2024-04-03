import React from "react";

const Avatar = ({ avatarSrc }) => {
  return (
    <div className="ml-4">
      <img
        src={avatarSrc}
        alt="Avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
  );
};

export default Avatar;
