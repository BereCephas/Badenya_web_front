import kid from "../assets/kid.jpg"

const Hero=()=>{
    return(
        <div className="bg-beige w-full pt-16 h-full  z-20 overflow-hidden ">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 place-items-center text-mate pb-0">

           
            <div className="sm:h-2/4 md:h-full w-full flex flex-col md:items-start text-center md:text-left justify-center  md:px-20 px-10">
                <h1 className="text-black text-5xl font-extrabold pb-5">Bienvenue a Lasalle Badenya</h1>
                <p className="font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quas modi, 
                possimus voluptas architecto perferendis ullam blanditiis beatae delectus commodi.
                Doloribus assumenda enim placeat inventore mollitia, nesciunt ratione molestias soluta?</p>
            <button className="bg-marron border-none px-8 
            py-3 rounded-md  text-white mt-3 mb-3">Lorem ipsum dolor sit amet</button>
            </div>
            <div className="bg-marron h-full w-full flex items-center justify-center  ">
                <img src={kid} alt="" className="md:h-4/5 max-h-96 w-4/6 rounded-3xl" />
            </div>
        </div>
        </div>
    )
}

export default Hero