import NotFoundError from "../errors/NotFoundError.js";

const notFound = (req, res) => {
  throw new NotFoundError("Route does not exist");
};

export default notFound;
