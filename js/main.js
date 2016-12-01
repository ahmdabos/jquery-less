requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": ["jquery-3.1.1.min","https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"]
    }
});

requirejs(["app/main"]);
