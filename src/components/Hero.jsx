import Header from '../common/Header'
import imagehero1 from '../assets/image/webp/people.webp'
import herobackground from '../assets/image/webp/first-bg.webp'
import heroellips from '../assets/image/webp/first-ellips.webp'

const Hero = () => {
    return (
        <div className='relative pb-24 lg:pb-0'>
            <img className='max-w-[1210px] w-full absolute right-2 bottom-0' src={herobackground} alt="herobackground" />
            <img className='absolute -top-4 left-0 xl:max-w-[1160px] lg:max-w-[900px] object-cover lg:h-[750px] xl:h-[810px] h-[650px] max-md:object-cover md:w-full 2xl:hidden block' src={heroellips} alt="#" />
            <Header />
            <div className='container mb-20 pb-20 lg:pb-0 lg:mb-0 relative'>
                <div className='flex lg:flex-row flex-col xl:-mt-12 relative z-[1]'>
                    <div className='xl:pt-[182px] lg:pt-[118px] sm:pt-20 pt-14'>
                        <h1 className='text-white uppercase lg:text-custom-2xl max-w-[335px] font-medium sm:text-6xl text-5xl machina_regular sm:max-w-[463px] lg:leading-[95px] leading-[60px] sm:leading-[75px]'> Building elastic Protocol </h1>
                        <p className='font-normal text-base leading-6 text-white max-w-[524px] md:my-6 my-4 capitalize'>
                            An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions
                        </p>
                        <a href="/" className='font-bold text-lg text-white leading-5 underline'>
                            Audited by Omniscia
                        </a>
                    </div>
                    <img className='xl:max-w-[635px] h-[502px] w-[335px] xl:h-[876px] md:max-w-[450px] md:h-auto md:w-full absolute lg:relative top-24 md:top-0 right-0 -z-10 opacity-50 sm:opacity-70 lg:opacity-100 pointer-events-none lg:pt-0 pt-9' src={imagehero1} alt="imagehero1" />
                </div>
            </div>
            <div className="flex flex-col gap-6 absolute top-12 right-7">
                {[...Array(5)].map((_, idx) => (
                    <span key={idx} className='w-2.5 h-2.5 bg-dark-blue rounded-full flex'></span>
                ))}
            </div>
            <img className='absolute -top-12 left-[-124px] h-[810px] w-[80%] 2xl:block hidden' src={heroellips} alt="heroellips" />
        </div>
    )
}

export default Hero