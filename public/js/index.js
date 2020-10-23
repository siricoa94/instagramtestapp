$( document ).ready(function() {
    $("#welcomeMessage").css("display", "visible");
    console.log("hello");
    setTimeout(block, 5000);
});
function block () {
    console.log("goodbye");
    $("#welcomeMessage").css("display", "hidden");
}