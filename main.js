const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

let img=new Image();
let fileName=" ";
const downloadBtn=document.getElementById("download-btn")
const uploadFile=document.getElementById("upload-file")
const revertBtn=document.getElementById("revert-btn")

//add filters and effects

document.addEventListener("click",e=>{
	if(e.target.classList.contains("filter-btn")){
		if(e.target.classList.contains("brightness-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.brightness(5).render();
			})
		}else if(e.target.classList.contains("brightness-remove")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.brightness(-5).render();
			})
		}else if(e.target.classList.contains("contrast-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.contrast(5).render();
			})
		}else if(e.target.classList.contains("contrast-remove")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.contrast(-5).render();
			})
		}else if(e.target.classList.contains("saturation-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.saturation(5).render();
			})
		}else if(e.target.classList.contains("saturation-remove")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.saturation(-5).render();
			})
		}else if(e.target.classList.contains("vibrance-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.vibrance(5).render();
			})
		}else if(e.target.classList.contains("vibrance-remove")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.vibrance(-5).render();
			})
		}else if(e.target.classList.contains("vinatage-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.vintage().render();
			})
		}else if(e.target.classList.contains("lumo-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.lumo().render();
			})
		}else if(e.target.classList.contains("clarity-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.clarity().render();
			})
		}else if(e.target.classList.contains("sincity-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.sinCity().render();
			})
		}else if(e.target.classList.contains("crossprocess-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.crossProcess().render();
			})
		}else if(e.target.classList.contains("pinhole-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.pinhole().render();
			})
		}else if(e.target.classList.contains("nostalgia-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.nostalgia().render();
			})
		}else if(e.target.classList.contains("hermajesty-add")){
			Caman("#canvas",img,function(){
				//increase brightness
				this.herMajesty().render();
			})
		}
	}
})

//revert filter
revertBtn.addEventListener("click",e=>{
	Caman("canvas",img,function(){
		this.revert();
	})
})

//upload filters
uploadFile.addEventListener("change",(e)=>{
	//get file
	const file=document.getElementById("upload-file").files[0];

	//initialise file reader api
	const reader =new FileReader();
	if(file){
		//set the file naeme
		fileName=file.name;
		//read the data as url
		reader.readAsDataURL(file);
	}
	//add image to canvas
	reader.addEventListener("load",()=>{
		//create the imaeg
		img =new Image();
		img.src=reader.result;
		//on image laod,add ro canvas
		img.onload=function(){
			canvas.width=img.width;
			canvas.height=img.height;
			ctx.drawImage(img,0,0,img.width,img.height)
			canvas.removeAttribute("data-caman-id");
		}
	},false)
})


//downlaod file
downloadBtn.addEventListener("click",()=>{
	//get the file extension
	const fileExtension=fileName.slice(-4);

	//init new file cariable
	let newFileName;

	//check image type
	if(fileExtension===".jpg"||fileExtension===".png"){
		newFileName=fileName.substring(0,fileName.length-4)+"edited.jpg"
	}
	//call download
	download(canvas,newFileName)
})



//downlaod function
function download(canvas,fileName){
	//init event
	let e;
	//create link
	const link=document.createElement("a")

	//set props
	link.download=fileName;
	link.href=canvas.toDataURL("image/jpeg",0.8)

	e=new MouseEvent("click")
	link.dispatchEvent(e);
}