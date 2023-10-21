import { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import { useLaunchesData } from "./useLaunchesData";
import { DataContext } from "../../Context/valueProvider";

const AllLaunch = () => {
  const {
    pageNumber,
    searchInput,
    launchStatusFilter,
    dateFilter,
    upcomingFilter,
  } = useContext(DataContext) as {
    pageNumber: number;
    searchInput: string;
    launchStatusFilter: string;
    dateFilter: string;
    upcomingFilter: boolean;
  };
  const perPage = 9;
  const skip = (pageNumber - 1) * perPage;
  const { loading, launches } = useLaunchesData();

  // Filter launches based on selected filters
  const filteredLaunches = launches.filter((launch) => {
    const launchNameMatch = launch?.rocket?.rocket_name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const statusMatch =
      launchStatusFilter === "" ||
      (launchStatusFilter === "fail" && !launch?.launch_success) ||
      (launchStatusFilter === "success" && launch?.launch_success);

    const currentDate = new Date();
    currentDate.setMinutes(
      currentDate.getMinutes() - currentDate.getTimezoneOffset()
    );

    const launchDate = new Date(launch?.launch_date_local);
    launchDate.setMinutes(
      launchDate.getMinutes() - launchDate.getTimezoneOffset()
    );
    const dateMatch =
      dateFilter === "" ||
      (dateFilter === "week" &&
        launchDate >=
          new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)) ||
      (dateFilter === "month" &&
        launchDate >=
          new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000)) ||
      (dateFilter === "year" &&
        launchDate >=
          new Date(currentDate.getTime() - 365 * 24 * 60 * 60 * 1000)) ||
      (dateFilter === "5year" &&
        launchDate >=
          new Date(currentDate.getTime() - 5 * 365 * 24 * 60 * 60 * 1000));

    const upcomingMatch = !upcomingFilter || launch?.upcoming;

    return launchNameMatch && statusMatch && dateMatch && upcomingMatch;
  });

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!loading && !filteredLaunches?.length) {
    return (
      <div className="text-primary text-2xl flex justify-center font-semibold">
        <h1> No Products found</h1>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      {filteredLaunches.slice(skip, skip + perPage).map((launch, i) => {
        const launchDate = new Date(launch?.launch_date_local);
        const formattedDate = launchDate.toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        return (
          <div key={i} className="flex justify-center">
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
                <p className="text-gray-500 mt-6">
                  Launch Status{launch?.flight_number} :
                </p>
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
