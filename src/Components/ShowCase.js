import React, { useState } from 'react'
import arrowIcon from '../images/icon-arrow.svg'
import mobileOneImage from '../assets/room-homepage-master/images/mobile-image-hero-1.jpg'
import mobileTwoImage from '../assets/room-homepage-master/images/mobile-image-hero-2.jpg'
import mobileThreeImage from '../assets/room-homepage-master/images/mobile-image-hero-3.jpg'
import desktopOneImage from '../assets/room-homepage-master/images/desktop-image-hero-1.jpg'
import desktopTwoImage from '../assets/room-homepage-master/images/desktop-image-hero-2.jpg'
import desktopThreeImage from '../assets/room-homepage-master/images/desktop-image-hero-3.jpg'
import angleLeft from '../images/icon-angle-left.svg'
import angleRight from '../images/icon-angle-right.svg'

const data = [
    {
        id: 1,
        titile: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        mobile: [mobileOneImage],
        desktop: [desktopOneImage]
    },
    {
        id: 2,
        titile: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        mobile: [mobileTwoImage],
        desktop: [desktopTwoImage]
        
    },
    {
        id: 3,
        titile: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        mobile: [mobileThreeImage],
        desktop: [desktopThreeImage]
    },
]
const ShowCase = () => {
    const [items] = useState(data)
    const [slides, setSlides] = useState(1)
    function nextSlide() {
        if(slides !== items.length) {
            setSlides(slides + 1)
        } else if (slides === items.length) {
            setSlides(1)
        }
    }

    function previousSlide()  {
        if(slides !== 1) {
            setSlides(slides - 1)
        } else if(slides === 1) {
            setSlides(items.length)
        }
    }
  return (
    <>
        <section>
            {
                items.map((item, index) => (
                    <article key={item.id} 
                    className={ 
                        slides === index + 1
                        ? 'grid grid-cols-1 lg:grid-cols-2 lg:place-items-center' : 'hidden'

                    }>
                        <div className='relative'>
                            <picture>
                                <source media="(min-width:750px)" srcSet={item.desktop} />
                                <img src={item.mobile} alt={item.titile}  className="w-full"/>
                            </picture>
                            <ul className='absolute -bottom-3 right-0 flex'>
                                <li>
                                    <button onClick={nextSlide} className='bg-black hover:bg-gray-700 transition-all duration-200'>
                                        <img src={angleLeft} alt="angle-left" className='p-6'/>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={previousSlide} className='bg-black hover:bg-gray-700 transition-all duration-200'>
                                        <img src={angleRight} alt="angle-right" className='p-6' />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='p-8 lg:p-12'>
                            <h1 className='text-3xl lg:text-5xl text-slate-900'>{item.titile}</h1>
                            <p className='text-slate-900 opacity-75 my-6'>{item.description}</p>
                            <button className='flex items-center gap-4 uppercase hover:opacity-75' style={{letterSpacing:'6px'}}>
                                SHOW NOW
                                <img src={arrowIcon} alt="arrow-icone" />
                            </button>
                        </div>
                    </article>
                ))
            }
        </section>
    </>
  )
}

export default ShowCase