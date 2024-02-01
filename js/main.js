let dropdownTimer;

function showDropdown() {
	clearTimeout(dropdownTimer);
	document.querySelector('.dropdown-content').style.display = 'block';
}

function hideDropdown() {
	dropdownTimer = setTimeout(function () {
		document.querySelector('.dropdown-content').style.display = 'none';
	}, 5000);
}