module.exports = {
  env: {
    NETLIFY_URL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:8888"
        : "https://quickstark-lifefitness.netlify.app",
  },
};
