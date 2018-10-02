/*
*
* Solving so popular CORS issue with one function 
*
*/
const addCorsHeaders = (allowedWebsite, res) => {
  res.setHeader("Access-Control-Allow-Origin", `http://${allowedWebsite}`);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, credentials"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  return res;
};
