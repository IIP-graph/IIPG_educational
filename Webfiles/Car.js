document.querySelectorAll(".mySwiper").forEach((element)=>{

    const swiper = new Swiper(element, {

        loop:true,

        autoplay:{
            delay:5000,
            disableOnInteraction:false
        },

        lazy:{
            loadPrevNext:true
        },

        pagination:{
            el: element.querySelector(".swiper-pagination"),
            clickable:true
        },

        navigation:{
            nextEl: element.querySelector(".swiper-button-next"),
            prevEl: element.querySelector(".swiper-button-prev")
        }

    });


    const observer = new IntersectionObserver(
        ([entry])=>{

            if(entry.isIntersecting){
                swiper.autoplay.start();
            }
            else{
                swiper.autoplay.stop();
            }

        },
        {
            threshold:0.5
        }
    );


    observer.observe(element);

});