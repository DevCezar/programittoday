document.getElementById('start').addEventListener("click", chronological);
function chronological() {
    window.location.href = 'GuidedPath.html'; 
}

var d = new Date(); 
document.getElementById('yr').innerHTML = d.getFullYear();