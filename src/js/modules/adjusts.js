
export function printAdjustsBlock(effectsDb,editingBlockInner){

	editingBlockInner.innerHTML = `
	<div class="adjustBlock">
	<div class="allAdjusts"></div>
	</div> `;
	const allAdjusts = document.querySelector(".allAdjusts");

			effectsDb.map(effect => {
				allAdjusts.innerHTML += `
				<div class="${effect.title}adjust adjustDiv">
					<h3 class="adjustTitleH3">${effect.title}</h3>
					<input type="range" class="${effect.title} adjust" >
					<h3 class="adjustOutput">50</h3>
				</div>

				`;
			});
}

export function adjustOutputs(){
	const adjusts = document.querySelectorAll(".adjust");

	adjusts.forEach(adjust => {
		if(adjust.classList[0] === "blur" || adjust.classList[0] === "grayscale" || adjust.classList[0] === "hue-rotate" || adjust.classList[0] === "invert" || adjust.classList[0] === "sepia"){
			adjust.value = 0;
			adjust.nextElementSibling.innerHTML = adjust.value;
		}
		if(adjust.classList[0] === "opacity"){
			adjust.value = 100;
			adjust.nextElementSibling.innerHTML = adjust.value;
		}
		if(adjust.classList[0] === "saturate"){
			adjust.value = 1;
			adjust.min = 1;
			adjust.nextElementSibling.innerHTML = adjust.value;
		}
		adjust.addEventListener("input",() => {
			adjust.nextElementSibling.innerHTML = adjust.value;
		});
	});
}

export function changeImgEffect(){

	const adjusts = document.querySelectorAll(".adjust");

	adjusts.forEach(adjust => {
		adjust.addEventListener("input",() => {
			const forEditImg = document.querySelector(".forEditImg");
			if(adjust.classList[0] === "brightness" || adjust.classList[0] === "contrast" || adjust.classList[0] === "blur"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value/50})`;}
			
			if(adjust.classList[0] === "blur"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value/50}px)`;}

			if(adjust.classList[0] === "grayscale"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value}%)`;}

			if(adjust.classList[0] === "hue-rotate"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value*2}deg)`;}

			if(adjust.classList[0] === "invert"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value}%)`;}

			if(adjust.classList[0] === "opacity"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value}%)`;}

			if(adjust.classList[0] === "saturate"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value})`;}

			if(adjust.classList[0] === "sepia"){
			forEditImg.style.filter = `${adjust.classList[0]}(${adjust.value*2}%)`;}
	

		});
	});
}

export function resetChanges(resetAllButton,defaultWidth,defaultHeight){
	resetAllButton.addEventListener("click",() => {
		const forEditImg = document.querySelector(".forEditImg");
		forEditImg.style.filter = "";
		forEditImg.style.transform = `rotate(${0}deg)`;
		const adjusts = document.querySelectorAll(".adjust");
			adjusts.forEach(adjust => {
				if (adjust.classList[0] === "opacity"){
					adjust.value = 100;
					adjust.nextElementSibling.textContent = adjust.value;
				}else if(adjust.classList[0] === "brightness" || adjust.classList[0] === "contrast"){
					adjust.value = 50;
					adjust.nextElementSibling.textContent = adjust.value;
				}else if(adjust.classList[0] === "saturate"){
					adjust.value = 1;
					adjust.nextElementSibling.textContent = adjust.value;
				}else{
					adjust.value = 0;
					adjust.nextElementSibling.textContent = adjust.value;
				}
			});
			const widthInput = document.querySelector(".widthInput");
			const heightInput = document.querySelector(".heightInput");
			forEditImg.style.width = defaultWidth;
			forEditImg.style.height = defaultHeight;
			if(widthInput || heightInput){
				widthInput.value = "";
				heightInput.value = "";
			}	
		});
}