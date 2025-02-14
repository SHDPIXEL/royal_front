import StayCard from "../components/stays/StayCard";
import HotelDumy from "../assets/images/hotel_dumy.jpg";
import Banner from "../components/Banner";

const stays = [
    {
        id: 1,
        images: [HotelDumy, HotelDumy, HotelDumy],
        name: "Luxury Villa",
        city: "Mumbai",
        price: "5,999"
    },
    {
        id: 2,
        images: [HotelDumy, HotelDumy, HotelDumy],
        name: "Beach Resort",
        city: "Goa",
        price: "7,499"
    },
    {
        id: 3,
        images: [HotelDumy, HotelDumy, HotelDumy],
        name: "Mountain Retreat",
        city: "Manali",
        price: "6,299"
    },
    {
        id: 4,
        images: [HotelDumy, HotelDumy, HotelDumy],
        name: "City Hotel",
        city: "Delhi",
        price: "4,999"
    },
    {
        id: 5,
        images: [HotelDumy, HotelDumy, HotelDumy],
        name: "Heritage Palace",
        city: "Jaipur",
        price: "8,999"
    },
    {
        id: 6,
        images: [HotelDumy, HotelDumy, HotelDumy],
        name: "Eco Lodge",
        city: "Kerala",
        price: "6,799"
    }
];

const Home = () => {
    return (
        <main className="mt-5">
            {/* Banner Section */}
            <div className="mb-10">
                <Banner />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-semibold text-text-heading mb-5">
                Explore Some Stays Near You
            </h1>

            {/* Stays Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stays.map((stay) => (
                    <StayCard
                        key={stay.id}
                        images={stay.images}
                        name={stay.name}
                        city={stay.city}
                        price={stay.price}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;
