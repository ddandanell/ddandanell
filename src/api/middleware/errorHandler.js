/**
 * Global error handler middleware
 */
function errorHandler(err, _req, res, _next) {
  console.error('❌ Error:', err.message);

  const statusCode = err.statusCode || 500;
  const message = process.env.APP_ENV === 'production'
    ? 'Der opstod en fejl'
    : err.message;

  res.status(statusCode).json({
    error: message,
    ...(process.env.APP_ENV !== 'production' && { stack: err.stack }),
  });
}

module.exports = errorHandler;
