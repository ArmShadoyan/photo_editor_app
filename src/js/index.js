const globalBlock = document.querySelector("#globalBlock");


// imported functions
import { printEditingBlockDefault } from "./modules/globalBlockInner";
import { printUploadBlock } from "./modules/globalBlockInner";
import { printEditingBlock } from "./modules/globalBlockInner";
import { uploadPhotoForEdit } from "./modules/upload";
import { effectsDb } from "./modules/db";
import { printAdjustsBlock } from "./modules/adjusts";
import { adjustOutputs } from "./modules/adjusts";
import { changeImgEffect } from "./modules/adjusts";
import { resetChanges } from "./modules/adjusts";
import { printSizeBlock } from "./modules/sizeBlock";
import { printRotateFlipBlock } from "./modules/rotateFlip";


printUploadBlock(globalBlock);
printEditingBlockDefault(globalBlock);
//Dom API s
const resetAllButton = document.querySelector(".resetAllButton");
const forEditImg = document.querySelector(".forEditImg");
const adjusts = document.querySelectorAll(".adjusts");
const uploadLabel = document.querySelector(".uploadLabel");
const uploadInput = document.getElementById("uploadInput");
let editingBlockInner = document.querySelector(".editingBlockInner");
const allAdjusts = document.querySelector(".allAdjusts");


// function calls
	function adjustsBlock(){
		const adjustImg = document.querySelector(".adjustImg");
		adjustImg.addEventListener("click",()=>{
		printAdjustsBlock(effectsDb,editingBlockInner);
		adjustOutputs();
		changeImgEffect();
		resetChanges(resetAllButton,forEditImg,adjusts);
	});
	}

	function rotateFlipBlock(){
		const flipImg = document.querySelector(".flipImg");
		flipImg.addEventListener("click",()=>{
			printRotateFlipBlock(editingBlockInner);
			resetChanges(resetAllButton,forEditImg,adjusts);
		});
	}

	export function sizeBlock(){
		const cropImg = document.querySelector(".cropImg");
				cropImg.addEventListener("click",()=>{
					const forEditImg = document.querySelector(".forEditImg");
					const defaultWidth = forEditImg.style.width;
					const defaultHeight = forEditImg.style.height;
				printSizeBlock(editingBlockInner,forEditImg,defaultHeight,defaultWidth);
				resetChanges(resetAllButton,forEditImg);
			});
		
	}


    uploadPhotoForEdit(uploadInput,uploadLabel);
	rotateFlipBlock();
	adjustsBlock();


	function back(){
		const back = document.querySelector(".back");
		back.addEventListener("click",()=>{
			editingBlockInner.innerHTML = `
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
			adjustsBlock();		
			rotateFlipBlock();	
			sizeBlock();
		});
	}
	back();

