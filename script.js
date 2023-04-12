//your JS code here. If required.
const ptag = document.getElementById("status");
const upgrad = document.getElementById("update");
const btn = document.getElementById("enterBtn");

btn.addEventListener("click",()=>{
	ptag.style.display = "none";
	upgrad.style.display = "block";
	upgrad.textContent = "Entered Metaverse";
});