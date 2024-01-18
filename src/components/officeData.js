import light from "../images/office-workspace.jpg";
import darkCademia from "../images/office-workspace(2).jpg";
import blue from "../images/office-workspace(4).jpg";
import greenPlant from "../images/office-workspace(6).jpg";
import closedBlinds from "../images/office-workspace(7).jpg";
import maroon from "../images/office(9).jpg";

export const OFFICE_DATA = [
    [
        {
            name: "Light Room",
            price: "5",
            img: light,
            location: "Lavington, Nairobi",
            amenities: ["Collaborative Spaces","Wi-Fi", "Snacks"],
        },
    ],
    [
        {
            name: "Dark Academia",
            price: "4",
            img: darkCademia,
            amenities: ["Quiet rooms", "Snacks", "Wifi"],
        },
    ],
    [
        {
            name: "The Horizon",
            price: "5",
            img: blue,
            amenities: ["Unwinding lounge", "Snacks", "Wifi"]
        },
    ],
    [
        {
            name: "The Woods",
            price: "7",
            img: greenPlant,
            amenities: ["Ergonomic furniture", "Snacks", "Wifi"],
        },
    ],
    [
        {
            name: "Private Hall",
            price: "7",
            img: closedBlinds,
            amenities: ["Onsite gyms", "Snacks", "Wifi"],
        },
    ],
    [
        {
            name: "The Library",
            price: "6",
            img: maroon,
            amenities: ["Outdoor workspace", "Snacks", "Wifi"]
        },
    ],
];