/*
	Mounts a vText into the DOM
*/
export default function mountVText(vText, $parent) {
	const textValue = String(vText)
	$parent.appendChild(
		document.createTextNode(textValue)
	)
	return textValue
}