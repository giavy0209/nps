getContainer = document.querySelectorAll('main .hm-container.wow');
getContainer.forEach(
    function(el, idx){
        getItem = Array.from(el.querySelectorAll('.item'));
        getItem.forEach(
            function(el1,idx1){
                var delay = 0.3 * idx1 + 0.3    ;
                el1.setAttribute('data-wow-delay', delay + 's');
                // el1.setAttribute('data-wow-iteration', '10')
                el1.classList.add('wow')
                el1.classList.add('fadeInDown')
            }
        )
    }
)