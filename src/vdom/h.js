/*
	hypertext function

	transform-react-jsx transforms this:
		<ul>
			<li>chil 1</li>
			<li>chil 1</li>
		</ul>

	into this:
	h(
		"ul",
		null,
		h(
			"li",
			null,
			"child 1"
		),
		h(
			"li",
			null,
			"child 2"
		)
	);

	and h returns:
	{"ul", null, [
		{"li", null, "child 1"},
		{"li", null, "child 2"}
	]}

	so I can create the Virtual DOM
*/
import './utils'



export function h(tag, props, ...children) {
	return {
		tag: tag,
		props: props,
		children: children
								.flatten()
								.map((child, index) => {
									if (typeof child === 'object') {
										child._key = child.props && child.props.key !== undefined ? child.props.key : index
									}
									return child
								})
	}
}

window.h = h