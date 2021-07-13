var x = new Promise((resolve,Reject) => {
console.log("inside promise");
resolve("jp");

});

x
.then((x)=> console.log(x + "then"))
.catch((x) => console.log(x + "error"))
.finally( () => console.log("finally"))