import mountVComponent from './vComponent/mount'
import mountVElement from './vElement/mount'
import mountVText from './vText/mount'

/*
	Decides if a vNode is a vElement, vText or vComponent
	and passes it throught the right mounting method
*/
export default function mount(vNode, $parent){
	const { tag, props, children } = vNode

	//It's an element
	if(typeof tag === 'string') {
		return mountVElement(vNode, $parent)
	}

	//It's a text node
	if(typeof vNode === 'string' || typeof vNode === 'number') {
		return mountVText(vNode, $parent)
	}

	//It's a component
	if(typeof tag === 'function') {
		return mountVComponent(vNode, $parent)
	}

}