function capitalize(arr){
	const newarr = arr.map(str=>str.charAt(0).toUpperCase() + str.slice(1));
	return newarr;
}