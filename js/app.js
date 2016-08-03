$(function(){
	var TicTacToe = {

		varSwitch : function(str){

			if(str === ''){
				return 'x';
			}else if(str === 'x'){
				return 'o';
			}else{
				return 'x';
			}

		}

	}

 


var ohhAndEx = '';

	$('.game-grid').on('click','td',function(event){
		
		ohhAndEx = TicTacToe.varSwitch(ohhAndEx);
		var $target = $(event.target);

		$($target).html('<h2>'+ohhAndEx+'</h2>');


	});
});

//var $target = $(event.target);
//		var index = $target.index();	