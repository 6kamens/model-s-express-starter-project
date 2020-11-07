function errorHandler(req, res) {
  res.status(404).json({
    message: ` Not Found Url ${req.originalUrl}`
  });
}


module.exports = {
  errorHandler
};
