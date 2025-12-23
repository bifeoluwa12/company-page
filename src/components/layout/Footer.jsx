export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white text-center py-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">BusWeb </h3>
        <p>Made with ❤️ by Babawale Ifeoluwa David using React + Tailwind</p>
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} BusWeb. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-200">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-200">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-200">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
