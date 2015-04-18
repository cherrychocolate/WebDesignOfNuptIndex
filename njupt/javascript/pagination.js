// JavaScript Document
$(document).ready(function(e) {
	
	mypagination('#pagination01');
	mypagination('#pagination02');
	mypagination('#pagination');

	function mypagination(pagination){
	//上一页
	$(pagination +' li:first').click(function(){
			var nowPage = $(pagination +' .active').children();
			var nowPageNum = nowPage.html();
			if(nowPageNum!=1)
		     $(pagination +' li').removeClass('active');
			 if($(pagination +' #1').html()>1){
				for(var i = 1;i<6;i++){
					var index = $(pagination +' #' + i);
					index.html(parseInt(index.html()) -1);
					if(index.html()==nowPageNum-1){
					index.parent().addClass('active');}
				}
			}else if($(pagination +' #1').html()==1){
						for(var i = 1;i<6;i++){
						var index = $(pagination +' #' + i);
						if(parseInt(index.html())+1==nowPageNum){
						index.parent().addClass('active');}
					}
				 }
				 return false;
			})
			//下一页
		$(pagination +' li:last').click(function(){
			var nowPage = $(pagination +' .active').children();
		 $(pagination +' li').removeClass('active');
		 var nowPageNum = nowPage.html();
			 for(var i = 1;i<6;i++){
				 var index = $(pagination +' #' + i);
				index.html(parseInt(index.html())+1);
				if(index.html()-1==nowPageNum){
					index.parent().addClass('active');}
				 }
				 if(!$(pagination +' .active').children().html())
				 $(pagination +' #1').parent().addClass('active');
				 return false;
			})
		//数字
	 $(pagination +' li:gt(0)').not(pagination +' li:last').click(function(){
		 var nowPage = $(this).children();
		 $(pagination +' li').removeClass('active');
		 var nowPageNum = nowPage.html();
			 var change;
			 change=nowPageNum-$(pagination +' #3').html();
			 if(change>0){
				 for(var i = 1;i<6;i++){
				 var index = $(pagination +' #' + i);
				index.html(parseInt(index.html())+change);
				
				if(index.html()==nowPageNum){
					index.parent().addClass('active');}
				 }
				 }else if(change<0&&$(pagination +' #1').html()>2){
					 for(var i = 1;i<6;i++){
				 var index = $(pagination +' #' + i);
				index.html(parseInt(index.html())+change);
				
				if(index.html()==nowPageNum){
					index.parent().addClass('active');}
				 }
					 }else if(change<0&&$(pagination +' #1').html()==2){
						 for(var i = 1;i<6;i++){
				 var index = $(pagination +' #' + i);
				index.html(parseInt(index.html())-1);
				
				if(index.html()==nowPageNum){
					index.parent().addClass('active');}
						 }
						 }else
					  {
						 nowPage.parent().addClass('active');
						 }			
			 return false;
		 })

	}

});