const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./counter": "./components/counter.tsx",
        },
        extraOptions:{
          exposePages: true
        }
      })
    );

    return config;
  },
};
