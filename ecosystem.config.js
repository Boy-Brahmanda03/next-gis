module.exports = {
  apps: [
    {
      name: "nextjs-prod",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3001, // Ubah port jika diperlukan
      },
    },
  ],
};
