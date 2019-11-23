const path = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'src/main/js/index.js');
        paths.appSrc = path.resolve(__dirname, 'src/main/js');
        paths.appBuild = path.resolve(__dirname, 'build/resources/main/frontend');
        return paths;
    },
}