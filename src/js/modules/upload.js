import { sizeBlock } from "..";
export function uploadPhotoForEdit(uploadInput,uploadLabel){
	uploadInput.addEventListener("change",(e) => {
		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
	
		reader.onload = function(){
			let img = document.createElement("img");
			img.classList.add("forEditImg");
			imgDiv.appendChild(img);
			img.src = reader.result;
		};
		uploadLabel.remove();
		sizeBlock();
	});
}