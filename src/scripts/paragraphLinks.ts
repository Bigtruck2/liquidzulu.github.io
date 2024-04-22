    const paragraphElements = document.querySelectorAll('p');
    let paragraphs = [...paragraphElements]
    let blockquotes = document.querySelectorAll('blockquote');
    blockquotes.forEach((quoteElement)=>{
        quoteElement.querySelectorAll('p').forEach((quote)=>
            {if(quote){
                paragraphs.splice(paragraphs.indexOf(quote),1)
            }}
        )
        
    })
    paragraphs.forEach((element)=> {
        if(element.innerText.length>250 && element.outerHTML[1]!='<blockquote>'){ 
            element.outerHTML = `<div class='paragraph-wrapper'><a class='section-paragraph-link' href=#${element.id}></a><p class='' id=${element.id}>${element.innerHTML}</p>`
        }
    });