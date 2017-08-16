import mount from '../mounting'
import { updateAttributes } from '../updating'

/*
	Mounts a vElement into the DOM
*/
export default function mountVElement(vElement, $parent) {
	const { tag, props, children } = vElement
	const $element = document.createElement(tag)
	vElement.$element = $element

	updateAttributes($element, props)

	children
		.flatten()
		.forEach(child => mount(child, $element))

	$parent.appendChild($element)
	
	return $element
}

/*
	Flattens an array
	[1,2, [3,4], [[5,6], [7,8]]] => [1, 2, 3, 4, 5, 6, 7, 8]
*/
Array.prototype.flatten = function(){
	return this.reduce( (flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten) , [])
}