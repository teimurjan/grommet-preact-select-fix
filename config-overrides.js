module.exports = function override(config, env) {
  config.resolve.alias["react"] = "preact/compat";
  config.resolve.alias["react-dom"] = "preact/compat";
  config.resolve.alias["create-react-class"] =
    "preact/compat/lib/create-react-class";
  config.resolve.alias["react-dom-factories"] =
    "preact/compat/lib/react-dom-factories";

  return config;
};
