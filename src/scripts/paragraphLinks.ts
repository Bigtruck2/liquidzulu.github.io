    const paragraphElements = document.querySelectorAll('p');
    let paragraphs = [...paragraphElements]
    let blockquotes = document.querySelectorAll('blockquote');
    blockquotes.forEach((quoteElement)=>{
        quoteElement.querySelectorAll('p').forEach((quote)=>
            {if(quote){
                paragraphs.splice(paragraphs.indexOf(quote),1)
            }}
        )
        
    });
    function hasDuplicates(array:string[]) {
        return (new Set(array)).size !== array.length;
    }
    
    //let id:string[] = []
    paragraphs.forEach((element)=> {
        if(element.innerText.length>300 && element.parentElement?.tagName!='blockquote'){ 
            //id.push(element.id);
            element.outerHTML = `<div class='paragraph-wrapper'><a class='section-paragraph-link' href=#${element.id}></a><p class='' id=${element.id}>${element.innerHTML}</p>`
        }
    });
    //check for duplicated ids
    /**if(hasDuplicates(id)){
        console.error(id.filter((item, index) => index !== id.indexOf(item)))
    }**/