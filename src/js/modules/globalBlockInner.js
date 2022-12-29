
 export function editingBlockInnerDefault(){
	return `
<div class="adjustImgDiv globalOptionsDiv">
	<img src="./images/adjust.png" alt="" width="50px" height="50px" class ="adjustImg optionIcons"> 
	<h3 class="adjustH3">Adjust</h3>
</div>	
<div class="flipImgDiv globalOptionsDiv">
	<img src="/src/images/flip.png"" width="50px" height="50px" class ="flipImg optionIcons"> 
	<h3 class="positionH3">Position</h3>
</div>	
<div class="cropImgDiv globalOptionsDiv">
	<img src="/src/images/crop.png"" width="50px" height="50px" class ="cropImg optionIcons"> 
	<h3 class="sizeH3">Size</h3>
</div>	

`;
}

export function printUploadBlock(globalBlock){
	const uploadHtml = `
	<div id = "uploadBlock">
		<div class="uploadBlockInner">
				<div id="imgDiv"></div>

				<label for="uploadInput" class="uploadLabel">
					<h1 class="uploadH3">Click to upload photo</h1>
					<img src="./images/upload.png" id="uploadIcon" alt="uploadIcon"> 
					<input type="file" id="uploadInput">
				</label>
		<div>
	</div>
		`;
	globalBlock.insertAdjacentHTML("afterbegin",uploadHtml);
}

export function printEditingBlockDefault(globalBlock){
	const editingHtml = `
	<div id = editingBlock>
		<div class="editingBlockInner">
		 	${editingBlockInnerDefault()}

		
		</div>
			<button class = "download">Download</button>
			<button class = "resetAllButton">Reset changes</button>
			<button class = "back">Back</button>
	</div>
	`;
	globalBlock.insertAdjacentHTML("beforeend",editingHtml);
}







			