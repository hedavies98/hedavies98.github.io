window.onload = function()
{
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        txt = target.textContent || target.innerText;   
	document.getElementById(txt.toLowerCase().split(" ")[0]).classList.toggle("hidden");
}, false);
}