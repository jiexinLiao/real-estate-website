import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate(); 

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/123008645_p0.jpg')", // 替换为你的背景图片 URL
        backgroundSize: "cover", // 确保图片覆盖整个屏幕
        backgroundPosition: "center", // 图片居中
        backgroundRepeat: "no-repeat", // 避免图片重复
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={() => navigate('/')} // 返回主页面
          className="mt-4 w-full py-2 px-4 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SignUp;
