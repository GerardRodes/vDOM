import './vdom/h'
import mount from './vdom/mounting'
import Component from './vdom/Component'



class List extends Component {

	constructor(props, children){
		super(props, children)

		this.state = {
			childs: []
		}
	}


	renderChilds() {
		return this.state.childs
			.filter((child, i) => String(child.id).indexOf(this.props.search) !== -1 )
			.map((child, i) =>
				<li 
					onClick={(e) => this.removeChild(i)}
					key={'child_'+child.id} >
					I'm child {child.id}
				</li>)
	}


	appendChild() {
		this.setState({
			childs: this.state.childs.concat([
				{id: this.state.childs.length + 1 }
			])
		})
	}


	removeChild(index) {
		this.setState({
			childs: this.state.childs.filter((child, i) => i !== index)
		})		
	}


	removeLastChild() {
		this.setState({
			childs: this.state.childs.slice(0, this.state.childs.length - 1)
		})
	}


	render() {
		return (
			<div>
				Childs: {this.state.childs.length}<br />
				<button onClick={(e) => this.appendChild()} >Add child</button>
				<button onClick={(e) => this.removeLastChild()} >Remove child</button>
				<ul>
					{this.renderChilds()}
				</ul>
			</div>
		)
	}

}


class App extends Component {

	constructor(props, children){
		super(props, children)
		this.state = {
			value: ''
		}
	}


	handleInput(e) {
		this.setState({value: e.target.value})
	}


	render() {
		return (
			<div>
				<input onInput={(e) => this.handleInput(e)} />
				<List search={this.state.value} />
			</div>
		)
	}

}



const mountedElement = mount(<App />, document.getElementById('root'))
console.log( mountedElement )