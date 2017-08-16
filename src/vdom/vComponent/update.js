import { update } from '../updating'

export default function updateVComponent(oldVComponent, newVComponent) {
  const { _instance } = oldVComponent
  const { _vNode } 		= _instance

  const prevProps = oldVComponent.props
  const nextProps = newVComponent.props

  newVComponent.$element = oldVComponent.$element
  newVComponent._instance = _instance
  newVComponent._instance.props = nextProps

  const oldVNode = _vNode
  const newVNode = _instance.render()

  newVComponent._instance._vNode = newVNode

  update(oldVNode, newVNode, _instance.$parent)
}