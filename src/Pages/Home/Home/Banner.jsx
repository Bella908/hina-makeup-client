const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[700px]">
                    <img 
                        src="https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className="w-full h-full object-cover" 
                        alt="Slide 1"
                    />
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex items-center h-full left-0 top-0 bottom-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="space-y-6 w-1/3 ml-10">
                            <h5 className="font-bold text-6xl">Discover Your Next Adventure</h5>
                            <p>Explore, Experience, Enjoy!</p>
                        </div>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full h-[700px]">
                    <img 
                        src="https://images.unsplash.com/photo-1680789527271-f1fc1528f27e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" 
                        className="w-full h-full object-cover" 
                        alt="Slide 2"
                    />
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full h-[700px]">
                    <img 
                        src="https://images.unsplash.com/photo-1656523201068-8ed449fb1434?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className="w-full h-full object-cover" 
                        alt="Slide 3"
                    />
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Banner;
