import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>Requested page doesn't exist.</h1>
      <Link to={"/"}>Go to home page</Link>
    </div>
  );
}

export default NotFoundPage;
