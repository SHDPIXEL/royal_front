import StayFilter from "../../components/stays/StayFilter";
import StayCard from "../../components/stays/StayCard";
import HotelDumy from "../../assets/images/hotel_dumy.jpg"


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
    },{
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


const searchResult = () => {
    return (
        <div className="pt-10 flex space-x-5 h-[calc(100vh-80px)] overflow-hidden">

            {/* Stay Cards Section (Scrollable) */}
            <section className="w-3/4 h-full overflow-y-auto pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
            </section>

            {/* Filter Section (Sticky and Scrollable) */}
            <section className="flex justify-end w-1/3 h-full bg-white overflow-y-auto rounded-lg">
                <div>
                    <StayFilter />
                </div>
            </section>


        </div>
    );
};

export default searchResult;
