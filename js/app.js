	var TicTacToe = {

		playerInput:[["","",""],["","",""],["","",""]],

		varSwitch : function(str){

			if(str === 'O'){
				return 'X';
			}else{
				return 'O';
			}

		},

		addInput : function(pIndex,tarIndex,tarValue){

			TicTacToe.playerInput[pIndex].splice(tarIndex, 1, tarValue);

		},

		winTeam : '',


		compareFunc : function(){
			//compare all rows
			var userWon = false;
			
			if(TicTacToe.playerInput[0][0] === TicTacToe.playerInput[1][1] && TicTacToe.playerInput[0][0] === TicTacToe.playerInput[2][2]){
					TicTacToe.winTeam = TicTacToe.playerInput[0][0];
					return true;
				
				
			}else if(TicTacToe.playerInput[2][0] === TicTacToe.playerInput[1][1] && TicTacToe.playerInput[2][0] === TicTacToe.playerInput[0][2]){
					TicTacToe.winTeam = TicTacToe.playerInput[2][0];
					return true;
				
			}else{

				for(var i =0; i < TicTacToe.playerInput.length; i++ ){
					
					 if(TicTacToe.playerInput[i][0] === TicTacToe.playerInput[i][1] && TicTacToe.playerInput[i][0] === TicTacToe.playerInput[i][2]){
						TicTacToe.winTeam = TicTacToe.playerInput[i][0];	
						return true;
						
					}
					for(var j =0; j < TicTacToe.playerInput[i].length; j++){
						if(TicTacToe.playerInput[0][j] == TicTacToe.playerInput[1][j] && TicTacToe.playerInput[0][j] == TicTacToe.playerInput[2][j]){
							if(userWon){
								break;
							}else{
								TicTacToe.winTeam = TicTacToe.playerInput[0][j];
								userWon = true;
								return true;
							}
						}
					}
					
				}
			}//end of else

		},

		gameReset : function(){

			window.location.reload();
		},

		/*emptyArray: function(){

			for(var i =0; i<TicTacToe.playerInput.length; i++){
				for(var j=0; j<TicTacToe.playerInput[i].length; j++){
					TicTacToe.playerInput[i][j] = "";
				}
			}
		}*/

	};

$(function(){


 


var ohhAndEx = 'O';

	$('.game-grid').on('click','td',function(event){
		
		ohhAndEx = TicTacToe.varSwitch(ohhAndEx);
		var $target = $(event.target);

		if($target.text() == ''){
			TicTacToe.addInput($target.parent().index(),$target.index(),ohhAndEx);
			$target.html('<h2>'+ohhAndEx+'</h2>');
			TicTacToe.compareFunc();
			if(TicTacToe.winTeam !== ''){
				$('.lightbox').css('display','block');
				$('.lightbox > h1').text(TicTacToe.winTeam +' Team Won The Game');
				setTimeout(function(){$('.lightbox').css('display','none'); TicTacToe.gameReset();}, 2000);
			}
		}else{
			alert("You can't do that! Space Already Taken");
		}
		


	});
});

	