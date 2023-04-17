//your JS code here. If required.
const ptag = document.getElementById("status");
const btn = document.getElementById("enterBtn");

btn.addEventListener("click",()=>{
	ptag.textContent = "Entered Metaverse";
	const update = document.createElement("h1");
	update.textContent = "Entered Metaverse";
	// ptag.parentNode.replaceChild(update,ptag);
});