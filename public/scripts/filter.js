
    $(function () {

        var filterList = {

            init: function () {

                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.ux, .concepting, .overig, .logo, .web'
                    }
                });

            }

        };

        // Run the show!
        filterList.init();


    });

    
document.addEventListener("DOMContentLoaded", function(event) { 
    var portFilters = document.querySelector('#filters')
    
    
 
portFilters.addEventListener('click', function(){
    var activeCat = document.querySelector('li .active').textContent;
    var activeFilterText = document.querySelector("#active-filter-text"); 
    activeFilterText.textContent = activeCat;
})
  
   
});