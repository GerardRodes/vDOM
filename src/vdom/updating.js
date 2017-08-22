import './utils'
import updateVComponent from './vComponent/update'
import updateVElement from './vElement/update'
import updateVText from './vText/update'
import mount from './mounting'

/*
  Updates an $element, here we want to assert that
  oldVNode and newVNode reference to the same $element
*/
export function update(oldVNode, newVNode, $parent, index = 0) {
  if (oldVNode === undefined && newVNode !== undefined) {
    //New, has to be mounted
    mount(newVNode, $parent, index)

  } else if (oldVNode !== undefined && newVNode === undefined) {
    //Removed, add flag for post deleting
    oldVNode._remove = true
    return 'deleted'
  } else if (oldVNode !== undefined && newVNode !== undefined) {
    //Updating
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
}

export function updateAttributes($element, newAttributes) {

  for (let prop in newAttributes) {
    if (!prop.startsWith('_')) {
      if (prop === 'style') {
        for (let cssProp in newAttributes[prop]) {
          $element.style[cssProp] = newAttributes[prop][cssProp]
        }
      } else {
        let value = newAttributes[prop]
        if (prop.startsWith('on')) {
          //It's an event
          $element[prop.toLowerCase()] = value
        } else {
          if (value === null) {
            $element.removeAttribute(prop)
          } else {
            $element.setAttribute(prop, value) 
          }
        }
      }
    }
  }
  
}

export function updateChildren(oldVElement, newVElement, $element) {
  const prevChildren = Array.isArray(oldVElement.children) ? oldVElement.children : [oldVElement.children]
  const nextChildren = Array.isArray(newVElement.children) ? newVElement.children : [newVElement.children]

  let nodeDeleted = false

  for (let i = 0; i < nextChildren.length || i < prevChildren.length; i++) {
    const nextChild = nextChildren[i]
    const prevChild = prevChildren[i]
    let status = update(prevChild, nextChild, $element, i)

    if (status === 'deleted') {
      nodeDeleted = true
    }
  }

  if (nodeDeleted) {
    let deletedNodes = 0
    prevChildren.forEach((prevChild, index) => {
      if (prevChild._remove) {
        $element.removeChild($element.childNodes[index - deletedNodes])
        deletedNodes++
      }
    })
  }

}