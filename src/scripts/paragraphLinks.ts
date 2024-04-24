    const paragraphElements = document.querySelectorAll('p');
    let paragraphs = [...paragraphElements]
    
    //let id:string[] = []
    paragraphs.forEach((element)=> {
        if(element.innerText.length>300 && element.parentElement?.tagName!='BLOCKQUOTE'){ 
            //id.push(element.id);
            element.outerHTML = `<div class='paragraph-wrapper'><a class='section-paragraph-link' href=#${element.id}></a><p id=${element.id}>${element.innerHTML}</p></div>`
        }
    });
    /**function hasDuplicates(array:string[]) {
        return (new Set(array)).size !== array.length;
    }**/
    //check for duplicated ids
    /**if(hasDuplicates(id)){
        console.error(id.filter((item, index) => index !== id.indexOf(item)))
    }**/