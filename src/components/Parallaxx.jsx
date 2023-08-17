import React, { useEffect } from 'react'

export const Parallaxx = () => {

    useEffect(() => {
        document.querySelectorAll('.img-parallax').forEach(function(element) {
            let img = element;
            let imgParent = img.parentNode;
            let speed = parseFloat(img.getAttribute('data-speed'));

            function parallaxImg() {
            let imgY = imgParent.offsetTop;
            let winBottom = window.pageYOffset + window.innerHeight;
            let imgBottom = (winBottom - imgY) * Math.abs(speed);
            let imgTop = window.innerHeight + imgParent.clientHeight;
            let imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50) * (speed < 0 ? -1 : 1);
    
            img.style.top = imgPercent + '%';
            img.style.transform = 'translate(-50%, -' + imgPercent + '%)';
            }
    
            window.addEventListener('scroll', parallaxImg);
            window.addEventListener('resize', parallaxImg);
            parallaxImg();
        });
      return () => {

      }
    }, [])
    
    // bgImage={ '../assets/slider/4.jpg'}
    return (
        <div className=" relative overflow-hidden h-[200px] md:h-[550px] text-white">
            <img 
                className='img-parallax absolute right-0 top-0 left-1/2 transform -translate-x-1/2 w-screen h-[150%] md:h-[full]' 
                src="../assets/slider/4.jpg" 
                alt="" 
                data-speed="1.2"/>

                <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                    <h2 className='tracking-widest'><span className=' text-primary-main'>50%</span> de descuento</h2>
                    <h3 className='tracking-widest md:text-2xl'>por tiempo limitado</h3>
                </div>
        </div>
    )
}
