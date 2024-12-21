import { useParams } from "react-router-dom";

const ErrorPage = (props) => {

  console.log(useParams() );
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
}

export default ErrorPage;