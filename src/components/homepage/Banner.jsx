
const Banner = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-5xl mx-auto text-center px-4">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Friends to keep close in your life
                </h1>

                <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition">
                    + Add a Friend
                </button>

            </div>
        </section>
    );
};

export default Banner;