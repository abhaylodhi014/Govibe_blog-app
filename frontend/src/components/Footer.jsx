

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">GoVibe</h1>
              <p className="mt-2 text-sm text-gray-400">Connect, share, and vibe with stories and photos.</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center">
              <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.64 6v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.388 3.635 1.355 2.668 2.322 2.411 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.316 2.45 1.283 3.417.967.967 2.14 1.224 3.417 1.283 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.45-.316 3.417-1.283.967-.967 1.224-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.316-2.45-1.283-3.417C19.398.388 18.225.131 16.948.072 15.668.013 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} GoVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  