import mount from '../mounting'

let vDomIdCounter = 0

/*
	Mounts a vComponent into the DOM
*/
export default function mountVComponent(vComponent, $parent, index) {
	const { tag, props, children } = vComponent
	const Component = tag
	const instance  = new Component(props, children)
	const nextVNode = instance.render()
	const vDomId    = vDomIdCounter++

	nextVNode.props = Object.assign(nextVNode.props || {}, {'data-vdom-id': vDomId})
	
	const $element  = mount(nextVNode, $parent)

	instance._vDomId  = vDomId
	instance._vNode 	= nextVNode
	instance.$parent 	= $parent
	instance.$element = $element

	vComponent._instance = instance
	vComponent.$element  = $element

	$element._instance = instance

	$parent.insertAtIndex($element, index)

	return $element
}