export default function updateVText(oldVText, newVText, $parent, index = 0) {
	if (oldVText !== newVText) {
		$parent.childNodes[index].nodeValue = newVText	
	}
}