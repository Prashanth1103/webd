function counter(){
	count = 0;

	function increment(){
		count +=1;
	}
	function decrement(){
		count -=1;
	}
	function getcount(){
		return count;
	}
	return{
	increment : increment,
	decrement : decrement,
	getcount : getcount
	};
}