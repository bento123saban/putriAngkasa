/* window on scroll */
window.onscroll = function() {
	const wHeight = window.innerHeight;
	let wScroll = document.body.scrollTop || document.documentElement.scrollTop;

	progBar(`${wScroll}`);
	menuAlert(`${wHeight}`);
	navIndicator(`${wHeight}`);
	parallax()
};


/* daftar function() */
/* 1. Empty */

/* 2. ProgBar */
function progBar(winScroll) {
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	document.getElementById("window-progress").style.width = scrolled + "%";
}

/* 3. parallax */
function parallax() {
	const parallax = document.querySelectorAll('.allMenu');
	const winHeight = window.innerHeight;		
	const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		
	parallax.forEach((target) => {
		const attach = target.getAttribute("data-attach");
		const direct = target.getAttribute("data-direction");
		const width = target.getAttribute("data-size-width");
		const height = target.getAttribute("data-size-height");
		target.style.backgroundRepeat = "no-repeat";
		target.style.backgroundSize = `${width} ${height}`;
		target.style.backgroundAttachment = attach;
		const margin = target.style.marginTop + target.style.marginBottom;
		const targetBound = target.getBoundingClientRect();
			
		if ((targetBound.bottom > (winHeight/10)) && (targetBound.top < (winHeight-(winHeight/10)))) {
			const targetScroll = winScroll - ((winScroll + targetBound.top - margin) - winHeight);
			const screenScroll = targetBound.height + winHeight;
			const scrollPercent = targetScroll / screenScroll * 100;
			switch (direct) {
				case "horizontal":
					target.style.backgroundPosition = scrollPercent + "% 50%";
					break;
				case "vertical":
					target.style.backgroundPosition = `50% ${scrollPercent}%`;
					break;
				case "horizontal-x":
					target.style.backgroundPosition = 100 - scrollPercent + "% 50%";
					break;
				case "vertical-x":
					target.style.backgroundPosition = "50% " + (100 - scrollPercent) + "%";
					break;
				default:
					console.error('Check your data attr.');
			} //end switch
		}//end if
	});
}



/* 4. Menu Alert */
function menuAlert(winHeight){
	const menu = document.querySelector('#MENU');
	const menuMsg = document.querySelector('#menu-alert');
	const menuBound = menu.getBoundingClientRect();
	if (menuBound.top <= 100 && menuBound.bottom >= winHeight/1.1) {
		menuMsg.style.opacity = 1;
	} else {
		menuMsg.style.opacity = 0;
	}
}

/* 5. Nav Indicator */
function navIndicator(winHeight) {
	const sections = document.querySelectorAll('section');
	const navA = document.querySelectorAll('#nav-menu .nav-list a');
	const winBar = document.querySelector("#about-text-progress");
	/* melacak posisi setiap nav menu */
	let current = "";
	sections.forEach( (section) => {
		if (section.getBoundingClientRect().top <= (winHeight * 0.4)) {
			current = section.getAttribute("id");
		}
	});

	navA.forEach((a) => {
		a.classList.remove("active");
		if (a.classList.contains(current)) {
		a.classList.add("active");
			document.getElementById("checkbtn").innerHTML= current + " <i class='fas fa-bars'></i>";
		}
	});
}
