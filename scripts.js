// dark mode
const darkModeToggle = document.getElementById('drk-toggle');
const darkSpan = document.getElementById('dark-span');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkMode', 'enabled');
	darkSpan.innerHTML = "light_mode";
}

const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkMode', null);
	darkSpan.innerHTML = "dark_mode";
}

if (darkMode == "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	let darkMode = localStorage.getItem('darkMode');
	if (darkMode !== "enabled") {
		enableDarkMode();
	}
	else {
		disableDarkMode();
	}
});