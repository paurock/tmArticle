const imageBlock = document.querySelector(".article-image__zoom") 
imageBlock.addEventListener('mouseover', ()=> imageBlock.classList.add('hover'))
imageBlock.addEventListener('mouseout', ()=> imageBlock.classList.remove('hover'))