module.exports = function(grunt) {
     grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "cssmin": {
            "target":{
                "options": {
                    keepSpecialComments: 0
                },
                "files": {
                    "dist/styles/myphoto.min.css": ["src/styles/myphoto.min.css"]
                }
            }
        },
        "uncss": {
          "target": {
            "files": {
              "src/styles/myphoto.min.css": ["src/index.html"]
            }
          }
        },
         "processhtml": {
            "target": {
              "files": {
                "dist/index.html": ["src/index.html"]
              }
            }
         },
        "watch": {
            "target": {
                "files": ["src/styles/myphoto.css"],
                "tasks": ["uncss", "cssmin", "processhtml", "uglify", "copy"]
            }
         },
        "copy": {
            "target": {
                "files": [
                    {
                        "cwd": "src/images",
                        "src": ["*"],
                        "dest": "dist/images/",
                        "expand": true
                    },
                    {
                        "cwd": "src/bower_components",
                        "src": ["*"],
                        "dest": "dist/bower_components/",
                        "expand": true
                    },
                    {
                        "cwd": "src/js",
                        "src": ["*"],
                        "dest": "dist/js/",
                        "expand": true
                    },
                 ]
            }
        },
         "uglify": {
            "target": {
                "files": {
                "dist/js/myphoto.min.js": ["src/js/*.js"]
              }
            }
          }
     });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-uncss");
    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};
