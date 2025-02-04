module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  routes(defineRoutes) {
    return defineRoutes(route => {
      route("*", "catchall.tsx");
    });
  }
};
