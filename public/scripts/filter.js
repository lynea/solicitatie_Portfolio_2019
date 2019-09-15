
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
