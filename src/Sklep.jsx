import Shop from './assets/shop.png'
import Cart from './assets/cart.png'
import User from './assets/user.png'
import Glass from './assets/glass.png'
import Koszulka1 from './assets/koszulka1.jpg'
import Koszulka2 from './assets/koszulka2.jpg'
import Koszulka3 from './assets/koszulka3.jpg'
import Koszulka4 from './assets/koszulka4.jpg'
import Star from './assets/star.png'
import Fetch from './Fetch'
import StarS from './assets/starS.jpg'
import {useState,} from 'react'

function Sklep(){
    const [selectedImage, setSelectedImage] = useState(Koszulka1);
    const [imagesOrder, setImagesOrder] = useState([Koszulka2, Koszulka3, Koszulka4]);
    const handleImageClick = (image) => {
        let newOrder;
        switch(image) {
            case Koszulka2:
                newOrder = [Koszulka3, Koszulka4, Koszulka1];
                break;
            case Koszulka3:
                newOrder = [Koszulka4, Koszulka1, Koszulka2];
                break;
            case Koszulka4:
                newOrder = [Koszulka1, Koszulka2, Koszulka3];
                break;
            default:
                newOrder = [Koszulka2, Koszulka3, Koszulka4];
                break;
        }
        setImagesOrder(newOrder);
        setSelectedImage(image);
    };
    return(
        <>
        <div className="flex items-center justify-between gap-x-3 rounded-lg bg-gray-800 px-3 py-3 lg:px-5 lg:py-4">
            <div className='flex gap-x-3'>
                <div className='h-14 w-14 hover:opacity-70 bg-gray-600 rounded-2xl'>
                    <img src={Shop} alt="Shop"></img>
                </div>
            <div className='relative flex-1'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <img className='h-5 w-5 text-gray-300' src={Glass} alt="Glass"></img>
                </div>
                <input type="search" className='h-14 block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-red-700 focus:ring-2 focus:ring-red-700'></input>
                </div>
            </div>
            <div className='flex shrink-0 gap-x-3'>
            <div className='relative flex h-14 w-14 hover:opacity-70 bg-gray-600 rounded-2xl items-center justify-center rounded-full bg-gray-600 text-white'>
                <img className="h-14 w-14 hover:opacity-70 bg-gray-600 rounded-2xl" src={Cart} alt="Cart"></img>
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-sm font-bold text-cyan-800 bg-green-100">
                    <span>0</span>
                </div>
            </div>
            <img className="h-14 w-14 hover:opacity-70 bg-gray-600 rounded-2xl" src={User} alt="User"></img>
            </div>
        </div>
            <div className="grid grid-cols-4 justify-evenly">
                <div className="col-span-2 md:order-1 md:col-span-1">
                    <div className="space-y-2">
                        <div className="relative aspect-square">
                            <img alt="koszulka1" src={selectedImage} className="block rounded-lg"></img>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                    {imagesOrder.map((image, index) => (
                        <div key={index} className="relative aspect-square w-1/3" onClick={() => handleImageClick(image)}>
                            <img alt={`koszulka${index+2}`} src={image} className="block rounded-lg"></img>
                        </div>
                        ))}
                    </div>
            </div>
                <div className="col-span-2 md:order-3 md:col-span-1">
                    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
                        <div className="flex">
                            <div className="rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white">
                                Koniec za 2 dni
                            </div>
                        </div>
                        <div className="flex gap-x-1.5">
                            <div className="text-lg font-bold leading-snug text-cyan-100">
                                -10%
                            </div>
                            <div className="text-lg font-bold leading-snug text-white">
                                36zł
                            </div>
                            <div className="text-sm leading-snug text-gray-400 line-through">
                                40zł
                            </div>
                        </div>
                        <div className="text-sm text-gray-300">
                            Otrzymasz <strong>23 marca</strong> przed 17:00
                        </div>
                        <button className="relative w-full items-center space-x-2 rounded-lg bg-blue-600 px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="col-span-full space-y-4 md:order-2 md:col-span-2">
                    <div className="truncate text-xl font-medium text-white lg:text-2xl">
                        Koszulki piłkarskie
                    </div>
                    <div className="flex gap-x-1">
                        <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                        <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                        <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                        <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                        <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                    </div>
                    <div className="space-y-4 text-sm text-gray-200"> <p>4 Koszulki piłkarskie w zestawie.</p></div>
                </div>
            </div>
            <div className="space-y-6 h-1/2">
                <div className="text-lg font-medium text-white">
                    Produkty polecane dla ciebie
                </div>
                <div className="text-sm text-gray-400">
                    Na bazie twoich preferencji i innych zakupach
                </div>
                <div className="grid grid-cols-4 gap-6 justify-evenly">
                    <div className="col-span-2 md:col-span-1">
                        <div className="group block space-y-2 h-full flex flex-col">
                            <div className="relative aspect-square flex-grow">
                                <Fetch productIndex='0'/>
                            </div>
                            <div className="truncate text-sm font-medium text-white">
                                Czarna torba na laptopa
                            </div>
                            <div className="flex gap-x-1">
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={StarS} className='w-10 h-10'></img></div>
                            </div>
                            <div className="text-lg font-bold leading-snug text-white">
                                50zł
                            </div>
                            <div className="text-sm text-gray-300">
                                Otrzymasz jutro, <strong>23 marca</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="group block space-y-2 h-full flex flex-col">
                            <div className="relative aspect-square flex-grow">
                                <Fetch productIndex='1'/>
                            </div>
                            <div className="truncate text-sm font-medium text-white">
                                Koszula
                            </div>
                            <div className="flex gap-x-1">
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={StarS} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={StarS} className='w-10 h-10'></img></div>
                            </div>
                            <div className="text-lg font-bold leading-snug text-white">
                                80zł
                            </div>
                            <div className="text-sm text-gray-300">
                                Otrzymasz <strong>24 marca</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="group block space-y-2 h-full flex flex-col">
                            <div className="relative aspect-square flex-grow">
                                <Fetch productIndex='2'/>
                            </div>
                            <div className="truncate text-sm font-medium text-white">
                                Kurtka
                            </div>
                            <div className="flex gap-x-1">
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                            </div>
                            <div className="text-lg font-bold leading-snug text-white">
                                120zł
                            </div>
                            <div className="text-sm text-gray-300">
                                Otrzymasz <strong>25 marca</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="group block space-y-2 h-full flex flex-col">
                            <div className="relative aspect-square flex-grow">
                                <Fetch productIndex='3'/>
                            </div>
                            <div className="truncate text-sm font-medium text-white">
                                Podkoszulek z długim rękawem
                            </div>
                            <div className="flex gap-x-1">
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={Star} className='w-10 h-10'></img></div>
                                <div><img alt="gwiazdka" src={StarS} className='w-10 h-10'></img></div>
                            </div>
                            <div className="text-lg font-bold leading-snug text-white">
                                70zł
                            </div>
                            <div className="text-sm text-gray-300">
                                Otrzymasz <strong>25 marca</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Sklep