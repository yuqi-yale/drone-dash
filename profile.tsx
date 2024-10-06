import React, { useState } from 'react';

const Profile = () => {
  // Initial user state - you can fetch or update this with an API call
  const [user, setUser] = useState({
    username: 'ryan',
    email: 'ryan@example.com',
    password: '********',
    fullName: 'John Doe',
    title: 'Administrator',
    language: 'English',
    address: {
      street: '1234 Elm Street',
      city: 'Washington',
      zipCode: '20001',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('address')) {
      const [_, field] = name.split('.');
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Profile Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label><strong>Username:</strong></label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Email:</strong></label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Password:</strong></label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Full Name:</strong></label>
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Title:</strong></label>
        <input
          type="text"
          name="title"
          value={user.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Address:</strong></label>
        <input
          type="text"
          name="address.street"
          value={user.address.street}
          onChange={handleChange}
          placeholder="Street"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="text"
          name="address.city"
          value={user.address.city}
          onChange={handleChange}
          placeholder="City"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="text"
          name="address.zipCode"
          value={user.address.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Language:</strong></label>
        <select
          name="language"
          value={user.language}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>

      <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
        Save
      </button>
    </div>
  );
};

export default Profile;
