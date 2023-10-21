import { FiCheck, FiSearch } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
const Filter = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="lg:flex md:flex sm:block justify-between ">
      {/* search */}
      <div className="lg:flex md:flex sm:block items-end">
        <div className="font-sans text-black bg-white w-80">
          <div className="border rounded overflow-hidden flex">
            <input
              type="text"
              className="px-4 w-full py-2"
              placeholder="Search..."
            />
            <button className="text-white bg-blue-600 flex items-center justify-center px-4 border-l">
              <FiSearch />
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* checkbox for filter */}
        <div className="relative flex flex-wrap items-center mt-4">
          <input
            className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-blue-600 checked:bg-blue-600 focus:outline-none   focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            id="id-c01"
          />
          <label
            className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            htmlFor="id-c01"
          >
            Primary Checkbox
          </label>
          <div className="text-white  pointer-events-none absolute left-0 top-1 h-4 w-4  fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed">
            <FiCheck />
          </div>
        </div>

        <div className="sm:block lg:flex md:flex">
          {/* launch by status */}
          <div>
            <div className="relative my-6 w-60 ">
              <select
                id="id-04"
                name="id-04"
                required
                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="1">Failure</option>
                <option value="2">Success</option>
              </select>
              <label
                htmlFor="id-04"
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
                id="id-04"
                name="id-04"
                required
                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="1">Last Week</option>
                <option value="2">Last Month</option>
                <option value="3">Last Year</option>
              </select>
              <label
                htmlFor="id-04"
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