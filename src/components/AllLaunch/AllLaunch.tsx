import { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import { useLaunchesData } from "./useLaunchesData";
import { DataContext } from "../../Context/valueProvider";

const AllLaunch = () => {
  const { pageNumber } = useContext(DataContext) as {
    pageNumber: number;
  };
  const perPage = 9;
  const skip = pageNumber * perPage;
  const { loading, launches } = useLaunchesData();
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  const limitedLaunches = launches.slice(skip, skip + perPage);
  if (!loading && !limitedLaunches?.length) {
    return (
      <div className="text-primary text-2xl flex justify-center font-semibold">
        <h1> No Products found</h1>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      {limitedLaunches.map((launch) => {
        const launchDate = new Date(launch?.launch_date_local);
        const formattedDate = launchDate.toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        return (
          <div key={launch?.flight_number} className="flex justify-center">
            <div className="card lg:w-96 sm:w-80 bg-base-100 border shadow-sm">
              <figure className="pt-8">
                <img
                  src={launch?.links?.mission_patch_small}
                  alt="Shoes"
                  className=" w-32"
                />
              </figure>
              <div className="card-body pt-3 gap-0 items-center text-center">
                <p className="text-gray-500">Launch Date: {formattedDate}</p>
                <p className="text-[1.5rem] font-semibold">
                  {launch?.mission_name.slice(0, 18)}
                </p>
                <p className="text-gray-500">{launch?.rocket?.rocket_name}</p>
                <p className="text-gray-500 mt-6">Launch Status:</p>
                {launch?.launch_success ? (
                  <p className="text-white font-semibold px-4 py-1 rounded cursor-pointer mt-2 bg-green-500">
                    Success
                  </p>
                ) : (
                  <p className="text-white font-semibold px-4 py-1 rounded cursor-pointer mt-2 bg-red-500">
                    failed
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllLaunch;
