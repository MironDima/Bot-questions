 function myBot(n) {
		
	function qwestion() {
		
		let number = +prompt('Угадай число от 1 до 100')
		if( number > n && number != 0) {	
			alert('Загаданное число меньше,введите новый варинт')
			qwestion()
		}
		else if (number < n && number != 0) {
			alert('Загаданное число больше,введите новый варинт')
			qwestion()
		}
		else if ( number === n && number != 0 ) {
			alert('Поздравляю, Вы угадали!!!')
		}
		else if( number != 'number' && number != 0){
			alert("Введи число!")
			qwestion()
		}
		else if(number === 0) {
			alert('Игра окончена!')
			
		}
		console.log(number);
		console.log(n)
	}
 	return qwestion()
	
 }

let guessedNum = myBot(10);


