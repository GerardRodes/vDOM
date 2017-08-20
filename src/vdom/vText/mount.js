/*
	Mounts a vText into the DOM
*/
export default function mountVText(vText, $parent, index) {
	const textValue = String(vText),
				textNode  = document.createTextNode(textValue)
	
	$parent.insertAtIndex(textNode, index)
	
	return textValue
}