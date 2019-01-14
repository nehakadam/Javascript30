const inputs = document.querySelectorAll('.controls input');

function handleChange() {

	const suffix = this.dataset.sizing || '';

	// Set changes values of variables, so the change is reflected everywhere
	document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', handleChange));