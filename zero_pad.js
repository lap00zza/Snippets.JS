/*
 * zeroPad: pads numbers with zeros!
 * Useful for dates, etc
 * Usage: zeroPad(number, places)
 * number is the input number, places is to where it fills with zeros (or not)
 * Returns null if no number give, returns the number if no places given
*/

function zeroPad(number, places) {
	if (!number) return null
	if (!places) return number.toString()
	fill = places - number.toString().length
	fillNum = '0'
	return (fillNum.repeat(fill) + number)
}
