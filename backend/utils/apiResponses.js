const errorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
      success: false,
      error: {
          code: statusCode,
          message: message
      }
  });
};

const successResponse = (res, data) => {
  return res.status(200).json({
      success: true,
      data: data
  });
};

module.exports = { errorResponse, successResponse };
