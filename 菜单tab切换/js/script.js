var category = document.getElementById('categoryOpen');
var categoryLi = category.getElementsByTagName('li');
var categoryLiLen = categoryLi.length;
var menu = document.querySelectorAll('.menu');

for(var i=0;i<categoryLiLen;i++){

	categoryLi[i].index=i;

	categoryLi[i].onmouseover = function(){

		for(var j=0;j<categoryLiLen;j++){
			categoryLi[j].className = '';
			menu[j].style.display = 'none';
		}

		this.className='on';
		menu[this.index].style.display = 'block';

	}

	categoryLi[i].onmouseout = function(){
		for(var k=0;k<categoryLiLen;k++){
			categoryLi[k].className = '';
			menu[k].style.display = 'none';
		}
	}

}