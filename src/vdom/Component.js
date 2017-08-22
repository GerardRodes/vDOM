import { update } from './updating'



export default class Component {

	constructor(props, children) {
		this.props 		= props 	 || {}
		this.children = children || []

		this._vNode = null
		this.$parent  = null
	}


  updateComponent(newState) {
    this.state = newState

    const nextVNode = this.render()
    const index = Array.from(this.$parent.children).indexOf(this.$element)

    update(this._vNode, nextVNode, this.$parent, index)

    this._vNode = nextVNode
  }


  componentWillUpdate(nextProps, nextState) {

  }


	setState(newValues) {
		const newState = Object.assign({}, this.state, newValues)
		this.updateComponent(newState)
	}


	render() {}

}