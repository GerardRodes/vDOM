import mount from '../mounting'
import { updateAttributes } from '../updating'

/*
	Mounts a vElement into the DOM
*/
export default function mountVElement(vElement, $parent, index) {
	const { tag, props, children } = vElement
	const $element = document.createElement(tag)
	vElement.$element = $element

	updateAttributes($element, props)

	children
		.forEach(child => mount(child, $element))

	$parent.insertAtIndex($element, index)
	
	return $element
}