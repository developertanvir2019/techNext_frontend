import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error bg-info h-screen ">
      <div>
        <img
          className="lg:w-1/4 mx-auto pt-8"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1669327300~exp=1669327900~hmac=f325de599023aa072c89d08299fd4f6862dbd62cbb410f2d445a36785bb13624"
          alt=""
        />
        <h3 className="text-red-500 text-center font-bold my-3 text-3xl">
          page is not found
        </h3>
        <div className="flex justify-center">
          <Link to={"/"} className="btn btn-primary">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
