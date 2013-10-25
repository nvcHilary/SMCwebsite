var install = function(){
var manifestLocation = "/manifest.webapp"; // your domain here
var installRequest = navigator.mozApps.install(manifestLocation);

installRequest.onsuccess = function(data) {
    // App installed successfully!
    console.log("Install successful!");
};

installRequest.onerror = function(err) {
    // App couldn't be installed!
    console.log("Install error!");
};
}