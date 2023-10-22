import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/valueProvider";
import { useLaunchesData } from "../AllLaunch/useLaunchesData";

const Pagination = () => {
  const { launches } = useLaunchesData();
  const totalButon = Math.ceil(launches.length / 9);
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
    if (pageNumber < totalButon) {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    // Get the saved pageNumber from localStorage
    const savedPageNumber = localStorage.getItem("pageNumber");

    // If a saved value exists, set it as the current pageNumber
    if (savedPageNumber) {
      const parsedPageNumber = parseInt(savedPageNumber, 10);
      if (!isNaN(parsedPageNumber)) {
        setPageNumber(parsedPageNumber);
      }
    }
  }, [setPageNumber]);

  // Save the pageNumber to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pageNumber", pageNumber.toString());
  }, [pageNumber]);

  const visibleButtons = 5;
  const buttons = [];

  // Calculate the range of page numbers to display based on the current pageNumber
  const startPage = Math.max(1, pageNumber - 2);
  const endPage = Math.min(totalButon, startPage + visibleButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        title={`Page ${i}`}
        className={`inline-flex items-center justify-center w-8 h-10 text-sm font-semibold border ${
          pageNumber === i ? "bg-blue-600 text-white" : "text-blue-600"
        }`}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </button>
    );
  }

  if (startPage > 1) {
    // Display the "..." button if there are pages before the first button
    buttons.unshift(
      <button
        key="ellipsis-prev"
        type="button"
        className="inline-flex items-center justify-center w-8 h-10 text-blue-600"
        onClick={() => {
          const newPage = Math.max(startPage - visibleButtons, 1);
          setPageNumber(newPage);
        }}
      >
        ...
      </button>
    );
  }

  if (endPage < totalButon) {
    // Display the "..." button if there are pages after the last button
    buttons.push(
      <button
        key="ellipsis-next"
        type="button"
        className="inline-flex items-center justify-center w-8 h-10 text-blue-600"
        onClick={() => {
          const newPage = Math.min(endPage + 1, totalButon);
          setPageNumber(newPage);
        }}
      >
        ...
      </button>
    );
  }

  return (
    <div className="flex justify-center dark:text-gray-100 mt-12">
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
      {buttons}
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
