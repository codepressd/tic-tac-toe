	var TicTacToe = {

		playerInput:[[],[],[]],

		varSwitch : function(str){

			if(str === ''){
				return 'x';
			}else if(str === 'x'){
				return 'o';
			}else{
				return 'x';
			}

		},

		addInput : function(pIndex,tarIndex,tarValue){

			TicTacToe.playerInput[pIndex].splice(tarIndex, 0, tarValue);

		}

	};

$(function(){


 


var ohhAndEx = '';

	$('.game-grid').on('click','td',function(event){
		
		ohhAndEx = TicTacToe.varSwitch(ohhAndEx);
		var $target = $(event.target);
		TicTacToe.addInput($target.parent().index(),$target.index(),ohhAndEx);
		$($target).html('<h2>'+ohhAndEx+'</h2>');


	});
});

//var $target = $(event.target);
//		var index = $target.index();	