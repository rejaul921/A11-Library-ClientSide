

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative h-[50vh] md:h-[85vh] w-full">
                    <div className="h-full mx-auto w-11/12"><img src="https://i.ibb.co/hcTCz9p/slider1.jpg"     className="rounded-xl mx-auto h-full w-full" />
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <h3 className="text-white text-xl font-bold">Choose your Book!</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-white my-5">Meet Your Favourite Author</h2>
                            <h3 className="text-xl text-white text-center p-3 bg-black">DISCOVER YOUR NEXT BOOK</h3>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slide2 */}
                <div id="slide2" className="carousel-item relative h-[50vh] md:h-[85vh] w-full">
                    <div className="h-full mx-auto w-11/12"><img src="https://i.ibb.co/NS7tFjz/psychology4.jpg" className="rounded-xl mx-auto h-full w-full" /></div>
                    
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <h3 className="text-white text-xl font-bold">Choose your Book!</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-white my-5">Books That Really Matter</h2>
                            <h3 className="text-xl text-white text-center p-3 bg-black">DISCOVER YOUR NEXT BOOK</h3>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slide3 */}
                <div id="slide3" className="carousel-item relative h-[50vh] md:h-[85vh] w-full">
                    <div className="h-full mx-auto w-11/12"><img src="https://i.ibb.co/Zd6Ln6d/slider3.jpg" className="rounded-xl mx-auto h-full w-full" /></div>
                    
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <h3 className="text-white text-xl font-bold">Choose your Book!</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-white my-5">Find Your Books</h2>
                            <h3 className="text-xl text-white text-center p-3 bg-black">DISCOVER YOUR NEXT BOOK</h3>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;