const wp = require("@cypress/webpack-preprocessor");
const fs = require("fs");
const child_process = require("child_process");

module.exports = (on) => {
  const options = {
    webpackOptions: require("../../webpack.config"),
  };
  on("file:preprocessor", wp(options));
  on("task", {
    chkFileExists(filename) {
      return fs.existsSync(filename);
    },
  });
  on("task", {
    deleteFile(filename) {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
      }
      return null;
    },
  });
  on("task", {
    returnSystemFilePath() {
      return require("os").homedir();
    },
  });
  // Used to run local shell commands
  on("task", {
    exec(command) {
      return child_process.execSync(command);
    },
  });
};
