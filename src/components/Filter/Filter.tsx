import { FiCheck, FiSearch } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../Context/valueProvider";
const Filter = () => {
  const {
    setSearchInput,
    setLaunchStatusFilter,
    setDateFilter,
    upcomingFilter,
    setUpcomingFilter,
  } = useContext(DataContext) as {
    setSearchInput: (searchInput: string) => void;
    setLaunchStatusFilter: (launchStatusFilter: string) => void;
    setDateFilter: (dateFilter: string) => void;
    upcomingFilter: boolean;
    setUpcomingFilter: (upcomingFilter: boolean) => void;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.currentTarget as HTMLFormElement;
    const inputElement = formElement.querySelector(
      "input[type='text']"
    ) as HTMLInputElement;
    const inputValue = inputElement.value;
    setSearchInput(inputValue);
  };

  return (
    <div className="lg:flex md:flex sm:block justify-between ">
      {/* search */}
      <div className="lg:relative md:relative top-16">
        <div className="font-sans text-black bg-white w-80">
          <form
            onSubmit={handleSubmit}
            className="border rounded overflow-hidden flex"
          >
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              className="px-4 w-full py-2"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="text-white bg-blue-600 flex items-center justify-center px-4 border-l"
            >
              <FiSearch />
            </button>
          </form>
        </div>
      </div>

      <div>
        {/* checkbox for filter */}
        <div className="lg:flex md:flex sm:block justify-end ">
          <div className="relative flex flex-wrap items-center mt-4">
            <input
              className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-blue-600 checked:bg-blue-600 focus:outline-none   focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
              type="checkbox"
              checked={upcomingFilter}
              onChange={() => setUpcomingFilter(!upcomingFilter)}
              id="id-c01"
            />
            <label
              className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
              htmlFor="id-c01"
            >
              Show upcoming only
            </label>
            <div className="text-white  pointer-events-none absolute left-0 top-1 h-4 w-4  fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed">
              <FiCheck />
            </div>
          </div>
        </div>

        <div className="sm:block lg:flex md:flex">
          {/* launch by status */}
          <div>
            <div className="relative my-6 w-60 ">
              <select
                onChange={(e) => setLaunchStatusFilter(e.target.value)}
                id="status"
                name="status"
                required
                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="fail">Failure</option>
                <option value="success">Success</option>
              </select>
              <label
                htmlFor="status"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all  peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Launch by Status
              </label>
              <div className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed">
                <HiChevronDown />
              </div>
            </div>
          </div>
          {/* launch by date */}
          <div>
            <div className="relative my-6 w-60">
              <select
                onChange={(e) => setDateFilter(e.target.value)}
                id="date"
                name="date"
                required
                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="year">Last Year</option>
                <option value="5year">Last five Year</option>
              </select>
              <label
                htmlFor="date"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all  peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Launch by date
              </label>
              <div className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed">
                <HiChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
