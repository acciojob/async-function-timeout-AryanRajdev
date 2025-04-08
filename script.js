//your JS code here. If required.
let mybtn = document.getElementById("btn");

mybtn.addEventListener("click",()=>{
	let message = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;
    delay = Number(delay);
    let div = document.getElementById("output");

    const p = new Promise((resolve)=>{
	     setTimeout(()=>{
		resolve(message);
	    },delay);
    });

     async function f(){
	const v = await p;
	div.textContent = v;	
     }

    f();
	
});

