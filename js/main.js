const imageBlock = document.querySelector(".article-image__zoom") 
imageBlock.addEventListener('mouseover', function() { imageBlock.classList.add('hover')})
imageBlock.addEventListener('mouseout', function() {imageBlock.classList.remove('hover')})