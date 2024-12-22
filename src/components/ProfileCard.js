import React from 'react';

export const ProfileCard = ({ user }) => {
  const { name, picture, email, phone, location } = user;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
      <img
        src={picture.large}
        alt={`${name.first} ${name.last}`}
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="mt-4 text-xl font-semibold text-center">
        {name.first} {name.last}
      </h2>
      <p className="mt-2 text-sm text-center text-gray-600">{email}</p>
      <p className="mt-2 text-sm text-center text-gray-600">{phone}</p>
      <p className="mt-4 text-sm text-center text-gray-600">
        {location.city}, {location.country}
      </p>
    </div>
  );
};

export default ProfileCard;
