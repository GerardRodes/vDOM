/*
	Flattens an array
	[1,2, [3,4], [[5,6], [7,8]]] => [1, 2, 3, 4, 5, 6, 7, 8]
*/
Array.prototype.flatten = function(){
	return this.reduce( (flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten) , [])
}

//Inserts an element at the specefied index or appends it
Element.prototype.insertAtIndex = function(child, index) {
  index = index || 0
  if (index >= this.children.length) {
    this.appendChild(child)
  } else {
    this.insertBefore(child, this.children[index])
  }
}