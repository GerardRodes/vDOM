import updateVComponent from './vComponent/update'
import updateVElement from './vElement/update'
import updateVText from './vText/update'

/*
	Updates an $element, here we want to assert that
	oldVNode and newVNode reference to the same $element
*/
export function update(oldVNode, newVNode, $parent, index = 0) {
	if (typeof oldVNode === 'string' || typeof oldVNode === 'number') {
		updateVText(oldVNode, newVNode, $parent, index)
	}

	if (oldVNode.tag === newVNode.tag) {

		if (typeof oldVNode.tag === 'string') {
      updateVElement(oldVNode, newVNode)
    } else if (typeof oldVNode.tag === 'function') {
      updateVComponent(oldVNode, newVNode)
    }

	}

}

export function updateAttributes($element, newAttributes) {

	for (let prop in newAttributes) {
		if (prop === 'style') {
			for (let cssProp in newAttributes[prop]) {
				$element.style[cssProp] = newAttributes[prop][cssProp]
			}
		} else {
			$element.setAttribute(prop, newAttributes[prop])	
		}
	}
	
}

export function updateChildren(prevChildren, nextChildren, $parent) {
	prevChildren = Array.isArray(prevChildren) ? prevChildren : [prevChildren]
	nextChildren = Array.isArray(nextChildren) ? nextChildren : [nextChildren]

  for (let i = 0; i < nextChildren.length; i++) {
    const nextChild = nextChildren[i]
    const prevChild = prevChildren[i]
    update(prevChild, nextChild, $parent, i)
  }
}