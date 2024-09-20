import Icons from '../common/Icons'
import { GAME_DATA } from '../utils/Helper'
import table from "../assets/image/webp/table.webp";
import React from 'react'

const Footer = () => {
    return (
        <div className='sm:py-16 py-12 bg-game-layer bg-cover -mt-1' id='game'>
            <div className="container my-1 sm:my-0">
                <div className="flex items-center gap-6 lg:flex-row flex-col justify-between">
                    <div className="max-w-[572px] w-full flex flex-col sm:items-center lg:items-start">
                        <h2 data-aos='fade-right' className='machina_bold font-extrabold sm:leading-custom-xl text-custom-lg leading-8 sm:text-custom-xl sm:text-center lg:text-left text-white'>(E,E) Game Theory: An UPGRADE from (3,3)</h2>
                        <p data-aos='fade-right' className='sm:mt-11 mt-6 text-white capitalize text-base font-normal sm:text-center lg:text-left  italic max-w-[515px]'>Remember (3,3) at its core was about social coordination. Or, people working together to achieve a common outcome or goal. (E,E) is the same. But with (E,E) people are working together not to grow a robust treasury that would back a decentralized stablecoin but instead to establish the first ever decentralized amplified yield token… $EEFI. A token that can produce yield in any market condition.</p>
                        <p data-aos='fade-right' className='sm:mt-3 lg:mt-4 mt-2 text-white text-base capitalize font-normal sm:text-center lg:text-left  italic max-w-[502px]'>To achieve this (E,E) has everyone work together by interacting with and supporting its ecosystem flywheel: Vaults, Bonds, Markets and other components. Interaction with the (E,E) Flywheel will help build a treasury of what we term high quality “growth assets”. Assets that are revenue bearing, interest bearing, Real Yield bearing or Rebase bearing. Where the ‘growth’ aka the yields of these assets are used to act as long term decentralized leverage on EEFI’s value. This is (E,E). This is sustainable. This is the UPGRADE.</p>
                    </div>
                    <div className="max-w-[530px] relative w-full mt-6 lg:mt-0">
                        <div data-aos='fade-left' className="mx-auto w-[114px] relative z-[1] sm:w-[129px] bg-whit rounded h-[93px] grid place-items-center">
                            <div data-aos='fade-left' className="sm:w-[116px] w-[102px] h-20 rounded bg-lite-blue flex flex-col justify-center items-center">
                                <p data-aos='fade-left' className='machina_bold font-extrabold text-white text-xl sm:text-2xl text-center'>YOU</p>
                                <p data-aos='fade-left' className='font-normal  text-sm text-white text-center'>(Flywheel)</p>
                            </div>
                        </div>
                        <div className="sm:pt-10 relative z-[1] pt-7 flex flex-wrap justify-between">
                            {GAME_DATA.map((items, idx) => (
                                <div key={idx} className={`mt-9 flex gap-3 sm:gap-6 items-start w-full ${idx === 2 || idx === 3 ? "justify-center gap-3 sm:gap-9" : "justify-between"}`}>
                                    {items.items.map((data, index) => (
                                        <div key={index} data-aos='fade-left' className="sm:max-w-[160px] max-w-[103px] h-full shadow-custom-xl w-full px-2 pb-2 min-h-[130px] bg-white pt-[18px] rounded-md flex flex-col items-center">
                                            <Icons className='max-w-6 w-full md:max-w-7' iconName={data.icon} />
                                            <p data-aos='fade-left' className='mt-2 machina_bold capitalize font-extrabold text-black text-sm sm:leading-5 sm:text-base text-center'>{data.title}</p>
                                            <p data-aos='fade-left' className='font-normal capitalize leading-4 text-sm text-black max-w-[123px] text-center mt-1'>{data.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <img src={table} alt="table" className='sm:top-0 -top-5 absolute left-0 w-full h-[104%] sm:h-[101%]' />
                        <p className='font-extrabold text-sm text-white absolute top-[110px] z-10 sm:top-[105px] left-[55%]'>Interact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer