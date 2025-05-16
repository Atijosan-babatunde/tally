import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AdminLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#45CECD] px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center text-3xl font-semibold text-[#45CECD] mb-8">
          talley
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-[#45CECD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#45CECD]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-[#45CECD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#45CECD]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <span>
                    <AiOutlineEye  className="h-5 w-5" />
                  </span>
                ) : (
                  <span>
                   <AiOutlineEyeInvisible className="h-5 w-5" />
                  </span>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#45CECD] text-white font-semibold rounded-full hover:bg-[#3dbab9] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
