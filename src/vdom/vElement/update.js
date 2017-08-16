import { updateAttributes, updateChildren } from '../updating'

export default function updateVElement(oldVElement, newVElement) {
	const $element = oldVElement.$element
	newVElement.$element = $element

	const { tag, props, children } = newVElement

	updateAttributes($element, props)
	updateChildren(oldVElement.children, newVElement.children, $element)
}