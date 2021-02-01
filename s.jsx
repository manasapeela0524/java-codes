< html >
    <
    body >
    <
    p > click on it < /p> <
    button onclick = "myfunction('Harry potter','wizard')" <
    try it > < /button> <
    p id = "demo" > < /p> <
    script >
    function myfunction(name, job) {
        document.getElementById("demo").innerHTML = "hello" + name + "job" + job;
    } <
    /script> <
    /body> <
    /html>