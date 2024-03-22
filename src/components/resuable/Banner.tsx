
interface props{
    heading?:string,
    subheading?:string
}

const Banner=({heading,subheading}:props)=>{

    return (
        <div className="text-center min-h-[340px] flex justify-center items-center relative bg-[url('/images/banner.jpg')] bg-cover bg-center ">
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute">
            </div>
                <div className="flex flex-col gap-y- bg-pink-80 px-3 py-2 text-white bg-red-40 absolute z-20">
                    <p className="text-[16px] font-[700] font-syne capitalize">{subheading} / {heading}</p>
                    <h1 className="font-syne text-[30px] sm:text-[48px] font-[800]  capitalize"> {heading}</h1>
                </div>
        </div>
    )
}

export default Banner;