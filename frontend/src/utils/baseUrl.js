/* eslint-disable no-undef */
export default process.env.NODE_ENV === "deploy"
  ? "http://localhost:8080"
  : "http://localhost:8080";
