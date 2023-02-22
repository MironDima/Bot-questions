function myBot(n) {
	
	let attepts = 10
	function qwestion() {
		
		attepts--
		if(attepts <= 0){  //если кончились попытки то,спрашиваем
			if(confirm('Попытки закончились, хотите сыграть еще?')){
				myBot(n)
			}
			else{
				return alert('До свидания')
			}
		}  
		else{		 //игра обновляется при нажатии на ок
			let number = +prompt('Угадай число от 1 до 100')

		if( number > n &&  number != 0){	
			alert(`Загаданное число меньше,осталось попыток ${attepts},введите новый варинт`)
			qwestion()

		}
		else if (number < n && number != 0) {
			alert(`Загаданное число больше,осталось попыток ${attepts},введите новый варинт`)
			qwestion()
		}

		else if ( number === n) {	//   вводит правильное число,
			if(confirm('Поздравляю, Вы угадали!!!  Хотели бы сыграть еще?')){
				myBot(n)		//ОК игра перезапускается и снова 10 попыток
			}
			else{
				return alert(' До свидания')
			}
		}

		else if( number != 'number' && number != 0){
			alert("Введи число!")
			qwestion()
		}
		else if(number === 0) {
			alert('Игра окончена! До свидания')
		}
		console.log(number);}

	}

 	return qwestion()
	
 }

let guessedNum = myBot(10);