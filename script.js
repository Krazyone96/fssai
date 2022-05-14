//selecting all required elemnts

const play_btn = document.querySelector(".play_btn button");
const dropdown_box = document.querySelector(".dropdown_box");

// if Play Quiz button is clicked
play_btn.onclick = ()=>{
	play_btn.style.display ='none';
	dropdown_box.classList.add("activeInfo");
	}

/* When the user clicks on the button, 
   toggle between hiding and showing the dropdown content */

function myFunction(){
	document.getElementById("myDropdown").classList.toggle("show");
	}
