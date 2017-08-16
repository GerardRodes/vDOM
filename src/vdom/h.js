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
export function h(tag, props, ...children) {
	return { tag, props, children }
}

window.h = h