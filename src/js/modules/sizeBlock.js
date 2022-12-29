export function printSizeBlock(editingBlockInner,forEditImg,defaultHeight,defaultWidth){
	editingBlockInner.innerHTML = `
		<div class="sizeDiv">
			<h3 class="widthH3">Width</h3>
			<input type"number" id="widthInput" class="widthInput sizeInput" placeholder="write the width" autocomplete="off">
				
			<h3 class="heightH3">Height</h3>
			<input type"number" id="heightInput" class="heightInput sizeInput" placeholder="write the height" autocomplete="off">
			
			<div>
			<button class="resetSizeButton">Reset</button>
			</div>
			
		</div>
	`;

		const widthInput = document.querySelector(".widthInput");
		const heightInput = document.querySelector(".heightInput");
		const resetButton  = document.querySelector(".resetSizeButton");

		const sizeInputs = document.querySelectorAll(".sizeInput");
		sizeInputs.forEach(sizeInput => {
			sizeInput.addEventListener("input",()=>{
				if(widthInput.value <= 370){
					forEditImg.style.width = `${widthInput.value}px`;
				}
				if(heightInput.value <= 300){
					forEditImg.style.height = `${heightInput.value}px`;
				}
			});
			
			resetButton.addEventListener("click",()=>{
				forEditImg.style.width = defaultWidth;
				forEditImg.style.height = defaultHeight;
				widthInput.value = "";
				heightInput.value = "";

			});
		});
	
		
		forEditImg.style.width = `${widthInput.value}px`;
		forEditImg.style.height = `${heightInput.value}px`;
}