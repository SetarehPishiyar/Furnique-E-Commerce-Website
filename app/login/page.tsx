import { RiGitlabFill, RiGoogleFill } from "@remixicon/react";

const Login = () => {
  return (
    <div className="min-h-svh flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden p-8 sm:p-10">
        <span className="text-2xl font-semibold text-secondary font-cunia text-center block">
          Furnique
        </span>
        <div className="space-y-8">
          <div className="text-center space-y-2 mt-5">
            <h2 className="text-3xl lg:text-4xl text-primary">Welcome Back</h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <form action="" className="space-y-6">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 accent-secondary focus:ring-1 focus:ring-secondary"
                />
                <label
                  htmlFor="checkbox"
                  className="block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <a
                href="#"
                className="text-sm text-secondary/80 hover:text-secondary transition-colors hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button className="btn-primary w-full py-3 text-lg">Sign In</button>
          </form>

          {/* Social Media Sign In */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2">
            <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-background transition-all">
              <span className="flex items-center gap-2">
                <RiGoogleFill size={18} />
                Google
              </span>
            </button>
            <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-background transition-all">
              <span className="flex items-center gap-2">
                <RiGitlabFill size={18} />
                Github
              </span>
            </button>
          </div>

          <div className="text-center text-sm gap-2">
            <span className="text-gray-600 mr-2">Don't have an account?</span>
            <a
              href={"#"}
              className="text-sm text-secondary/80 hover:text-secondary transition-colors hover:underline"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
