import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center border gap-32">
      <h1 className="text-9xl font-bold">Product Page</h1>
      <Link
        href={"/"}
        className="text-4xl font-semibold flex items-center gap-4 relative pb-2 group"
      >
        <span className="absolute w-0 h-2 bottom-0 left-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </span>
        Go Back Home
      </Link>
    </div>
  );
};

export default ProductPage;
