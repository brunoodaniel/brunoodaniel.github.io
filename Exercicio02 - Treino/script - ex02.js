function mudarCor(element){
    var path = element.getAttribute('href');  
    document.querySelectorAll('ul li a').forEach(function(link) {
        if (link.getAttribute('href') === path) {
        link.classList.add('active');
    }
    });
}