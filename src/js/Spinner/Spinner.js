var Spinner = function() {
    this.applyEffects = (elmId, color, width, height) => {
        if(!elmId){
            throw new Error("provide the Element");
        }else{
            let elm = document.createElement("div");
            elm.id = "DG-spinner";
            elm.style.height = height + "px"
            elm.style.width = width + "px"
            elm.style.border = "5px solid gray";
            elm.style.borderTopColor = color;
            elm.classList.add("spinner");
            elm.style.display = "none";
            elmId.appendChild(elm);

        }

        this.showSpinner = (elmId) => {
            if(elmId.querySelector("#DG-spinner")){
                elmId.querySelector("#DG-spinner").style.display = "block";
            }
        }

        this.hideSpinner = (elmId) => {
            if(elmId.querySelector("#DG-spinner")){
                elmId.querySelector("#DG-spinner").style.display = "none";
            }
        }
    }
}

export default Spinner;