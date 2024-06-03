const responseWrapper = (req, res, next) => {
  const originalSend = res.send;
  res.send = (data) => {
    originalSend.call(res, { status: "success", data });
  };
  next();
};

module.exports = responseWrapper;
