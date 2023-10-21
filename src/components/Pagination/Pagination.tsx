import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/valueProvider";

const Pagination = () => {
  const { pageNumber, setPageNumber } = useContext(DataContext) as {
    pageNumber: number;
    setPageNumber: (pageNumber: number) => void;
  };
  const handlePageClick = (page: number) => {
    setPageNumber(page);
  };

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber < 3) {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    // Get the saved pageNumber from localStorage
    const savedPageNumber = localStorage.getItem("pageNumber");

    // If a saved value exists, set it as the current pageNumber
    if (savedPageNumber) {
      setPageNumber(parseInt(savedPageNumber, 10));
    }
  }, [setPageNumber]);

  // Save the pageNumber to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pageNumber", pageNumber.toString());
  }, [pageNumber]);

  return (
    <div className="flex justify-center  dark:text-gray-100 mt-6">
      <button
        title="previous"
        type="button"
        className="inline-flex text-blue-600 items-center justify-center w-8 h-10 py-0 border rounded-md dark:bg-gray-900 dark:border-gray-800"
        onClick={handlePrevClick}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {Array.from({ length: 3 }, (_, index) => (
        <button
          key={index}
          type="button"
          title={`Page ${index + 1}`}
          className={`inline-flex  items-center justify-center w-8 h-10 text-sm font-semibold border ${
            pageNumber === index + 1
              ? "bg-blue-600 text-white"
              : "text-blue-600"
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        title="next"
        type="button"
        className="inline-flex text-blue-600 items-center justify-center w-8 h-10 py-0 border rounded-md dark:bg-gray-900 dark:border-gray-800"
        onClick={handleNextClick}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
