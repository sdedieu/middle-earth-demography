const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "middleHearthDemography",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
         name: "middleHearthDemography",
         filename: "remoteEntry.js",
         exposes: {
             './app': './/src/app/routes.ts',
         },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: '14.2.2' }, 
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: '14.2.2' }, 
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: '14.2.2' }, 
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: '14.2.2' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
