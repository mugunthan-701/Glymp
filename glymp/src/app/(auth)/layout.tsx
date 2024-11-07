"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Layout({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side with the image */}
      <div style={{ flex: '0 0 70%', position: 'relative' }}>
        <Image
          src="/overlapping_circles-1730971007159.svg" // Your logo or background image
          alt="SVG Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Right side with login and signup options */}
      <div style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(10, 10, 20, 0.15)', // Updated shadow
        backgroundColor: '#ffffff',
        transition: 'all 0.3s ease-in-out', // Smooth transition
      }}>
        {/* Conditional message */}
        <h2>{isLogin ? 'Welcome Back!' : 'Welcome!'}</h2>

        {/* Google Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #4285F4', // Border color matching Google blue
            borderRadius: '5px',
            width: '250px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover effect
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)'} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'} // Hover effect reset
        >
          <Image
            src="/google-color-svgrepo-com.svg"
            alt="Google Logo"
            width={20}
            height={20}
            style={{ marginRight: '10px' }} // Space between logo and text
          />
          Google
        </button>

        {/* GitHub Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #333', // Border color for GitHub
            borderRadius: '5px',
            width: '250px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover effect
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)'} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'} // Hover effect reset
        >
          <Image
            src="/github-142-svgrepo-com.svg"
            alt="GitHub Logo"
            width={20}
            height={20}
            style={{ marginRight: '10px' }} // Space between logo and text
          />
          GitHub
        </button>

        {/* Conditional link to Login or Signup */}
        <div>
          {isLogin ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/signup">Signup</Link>
          )}
        </div>

        {/* Button to toggle between Login and Signup */}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3', // Button color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for toggle button
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover effect
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)'} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'} // Hover effect reset
        >
          Switch to {isLogin ? 'Signup' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default Layout;
