import AllLaunch from "../AllLaunch/AllLaunch";
import Filter from "../Filter/Filter";

const LaunchBody = () => {
  return (
    <div className="min-h-[50vh] lg:mx-20 md:mx-12 sm:mx-5">
      <Filter />
      <AllLaunch />
    </div>
  );
};

export default LaunchBody;
