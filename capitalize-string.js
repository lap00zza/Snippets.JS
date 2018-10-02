/**
 * Capitalize the first letter of the string and lowercase the rest
 * @returns {String} returns a capitalized string
 */
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}

// As a function expression
const capitalize = string => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();