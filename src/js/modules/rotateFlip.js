export 	function printRotateFlipBlock(editingBlockInner){
	editingBlockInner.innerHTML=`
		<div class="left rotateFlipDiv">
			<img src="/src/images/rotateleft (1).png" alt="" width="50px" height="50px" class ="rotateleftImg optionIcons"> 
			<h3 class="rotateLeftH3"> Rotate left</h3>
		</div>
		<div class="right rotateFlipDiv">
			<img src="/src/images/rotateright (2).png" alt="" width="50px" height="50px" class ="rotaterightImg optionIcons">
			<h3 class="rotateRightH3"> Rotate right</h3>
		</div>
		<div class="flip rotateFlipDiv">
			<img src="/src/images/flip.png" alt="" width="50px" height="50px" class ="flipImg optionIcons">
			<h3 class="flipH3">Flip</h3>
		</div>
	`;
	const rotateLeftBtn = document.querySelector(".rotateleftImg");
	const rotateRightBtn = document.querySelector(".rotaterightImg");
	const flipBtn = document.querySelector(".flipImg");
	const forEditImg = document.querySelector(".forEditImg");

	let defaultN = 0;
	rotateLeftBtn.addEventListener("click",()=>{
		forEditImg.style.transform = `rotate(${defaultN-=90}deg)`;
	});
	rotateRightBtn.addEventListener("click",()=>{
		forEditImg.style.transform = `rotate(${defaultN+=90}deg)`;
	});
	flipBtn.addEventListener("click",()=>{

		if(forEditImg.style.transform === ""){
			forEditImg.style.transform = `scaleX(${-1})`;
		}else{
			forEditImg.style.transform = "";
		}
	});
}