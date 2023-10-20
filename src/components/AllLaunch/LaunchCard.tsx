const LaunchCard = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-80 bg-base-100 border shadow-sm">
        <figure className="pt-8">
          <img
            src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png"
            alt="Shoes"
            className=" w-32"
          />
        </figure>
        <div className="card-body pt-3 gap-0 items-center text-center">
          <p className="text-gray-500">Launch Date: 25 Feb, 2006</p>
          <p className="text-[1.5rem] font-semibold">FalconSat</p>
          <p className="text-gray-500">Falcon 1</p>
          <p className="text-gray-500 mt-6">Launch Status:</p>
          <p className="text-white font-semibold px-4 py-1 rounded cursor-pointer mt-2 bg-red-500">
            failed
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
