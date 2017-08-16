import './vdom/h'
import mount from './vdom/mounting'
import Component from './vdom/Component'



class List extends Component {

	constructor(props, children){
		super(props, children)

		this.state = {
			counter: 0
		}

		setInterval(() =>
			this.setState({counter: this.state.counter + 1})
		, 1000)
	}

	render() {
		return (
			<ul data-counter={this.state.counter} >
				{this.state.counter}
				<li>child 1</li>
				<li>child 2</li>
			</ul>
		)
	}

}


class App extends Component {

	constructor(props, children){
		super(props, children)

		this.state = {
			counter: 1
		}

		setInterval(() =>
			this.setState({backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)})
		, 500)
	}

	shouldComponentUpdate(){
		return false
	}

	render() {
		return (
			<div style={{
				backgroundColor: this.state.backgroundColor
				}} >
				<input />
				<List />
			</div>
		)
	}

}



const mountedElement = mount(<App message="this yo message!" />, document.getElementById('root'))
console.log( mountedElement )