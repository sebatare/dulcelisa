import {
    Carousel, Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
const f = new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    style: "currency",
  })

const product = {
    id:1,
    name:'Apple AirPods',
    description:'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.',
    price:"150000",
    url: "https://i.ytimg.com/vi/AS8CZjj3y4U/maxresdefault.jpg",
    alt:""

}

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-[#a78bfa] to-[#fbcfe8]">
            <header className="py-10 text-center ">
                <h1 className="text-4xl font-semibold">Galletitas</h1>
                <h2 className="text-2xl font-thin py-2">Galletas y pasteles</h2>
            </header>
            <main>
                <section className="mb-10 px-7">
                    <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio cupiditate nulla non necessitatibus vitae aut optio unde amet delectus, culpa nostrum sint, at, enim soluta voluptate deleniti autem iusto omnis.</p>
                    <Carousel
                        className="rounded-xl shadow-2xl"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <img src="https://i.ytimg.com/vi/AS8CZjj3y4U/maxresdefault.jpg" alt="image 1" className="h-full w-full object-cover" />
                        <img src="https://i.ytimg.com/vi/AS8CZjj3y4U/maxresdefault.jpg" alt="image 1" className="h-full w-full object-cover" />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7jWeGB4cYvD1r4iXEF-M3YGH2yeJ5LedEQ&usqp=CAU"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img src="https://i.ytimg.com/vi/AS8CZjj3y4U/maxresdefault.jpg" alt="image 1" className="h-full w-full object-cover" />
                    </Carousel>
                </section>
                <section className="bg-white">
                    <p className="pt-3 ml-4 text-lg font-extralight text-gray-800 hover:underline">Destacado</p>
                    <Card>
                        <CardHeader shadow={false} floated={false} className="max-h-[150px]">
                        
                            <img
                                src={product.url}
                                alt={product.alt}
                                className="h-full w-full object-cover cursor-pointer"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between ">
                                <Typography color="blue-gray" className="font-medium cursor-pointer">
                                    Apple AirPods
                                </Typography>
                                <Typography color="blue-gray" className="font-medium cursor-pointer">
                                {f.format(product.price)}
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                With plenty of talk and listen time, voice-activated Siri access, and
                                an available wireless charging case.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                ripple={false}
                                fullWidth={true}
                                className="bg-[#5b21b6]/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                                Al carrito
                            </Button>
                        </CardFooter>
                    </Card>
                </section>
                <section>
                    asd
                </section>
            </main>

        </div>
    );
}
export default Home;
