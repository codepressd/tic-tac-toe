	var TicTacToe = {

		playerInput:[["","",""],["","",""],["","",""]],

		varSwitch : function(str){

			if(str === 'o'){
				return 'x';
			}else{
				return 'o';
			}

		},

		addInput : function(pIndex,tarIndex,tarValue){

			TicTacToe.playerInput[pIndex].splice(tarIndex, 1, tarValue);

		},


		compareFunc : function(){
			//compare all rows
			
			if(TicTacToe.playerInput[0][0] === TicTacToe.playerInput[1][1] && TicTacToe.playerInput[0][0] === TicTacToe.playerInput[2][2]){
				alert(TicTacToe.playerInput[0][0] + ' Won The Game!');
				
			}else if(TicTacToe.playerInput[2][0] === TicTacToe.playerInput[1][1] && TicTacToe.playerInput[2][0] === TicTacToe.playerInput[0][2]){
				alert(TicTacToe.playerInput[2][0] + ' Won The Game!');
				
			}else{

				for(var i =0; i < TicTacToe.playerInput.length; i++ ){
					
					 if(TicTacToe.playerInput[i][0] === TicTacToe.playerInput[i][1] && TicTacToe.playerInput[i][0] === TicTacToe.playerInput[i][2]){
						alert(TicTacToe.playerInput[i][0] + ' Won The Game!');
						
					}
					for(var j =0; j < TicTacToe.playerInput[i].length; j++){
						if(TicTacToe.playerInput[0][j] == TicTacToe.playerInput[1][j] && TicTacToe.playerInput[0][j] == TicTacToe.playerInput[2][j]){
						alert(TicTacToe.playerInput[0][j] + ' Won The Game!');
						
						}
					}
					
				}
			}//end of else

		}

	};

$(function(){


 


var ohhAndEx = 'o';

	$('.game-grid').on('click','td',function(event){
		
		ohhAndEx = TicTacToe.varSwitch(ohhAndEx);
		var $target = $(event.target);

		if($target.text() == ''){
			TicTacToe.addInput($target.parent().index(),$target.index(),ohhAndEx);
			$target.html('<h2>'+ohhAndEx+'</h2>');
		}else{
			alert("You can't do that! Space Already Taken");
		}
		


	});
});

	