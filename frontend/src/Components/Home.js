import Ribs from "../img/ribsDisplay.jpg";
// import Grills from "../img/grill.jpg"
// import Steak from "../img/nystrip.jpg"
// import Platter from "../img/platter.jpg"

function Home() {
    return (
    <>
        <section className="relative mt-20 py-15 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
            <img
            className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src={Ribs}
            alt="rotating food images"
            />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Welcome to the Sizzle House!
            </h2>
            <p className="mt-4 text-base text-gray-200">
                Come on into our storefront to enjoy some of the best Southern
                hospitality along with Steaks and Bbq galore.
            </p>

            <form action="#" method="POST" className="mt-8 lg:mt-12">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                    <label htmlFor="email" className="sr-only"></label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </section>
        <footer className="footer p-10 mt-10 bg-neutral text-neutral-content">
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        </footer>
    </>
    );
}

export default Home;
