export type CabinType = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  amenities: string[];
  imageUrl: string;
  rating: number;
  available: boolean;
};

export const cabins: CabinType[] = [
  {
    id: "1",
    name: "Creek Cabin",
    description: "En mysig stuga vid bäcken med vedeldad kamin och utsikt över skogen.",
    pricePerNight: 1450,
    maxGuests: 4,
    bedrooms: 2,
    amenities: ["Wifi", "Kamin", "Kök", "Grillplats", "Parkering"],
    imageUrl: "/images/creek-cabin.jpg",
    rating: 4.7,
    available: true,
  },
  {
    id: "2",
    name: "Treetop Cabin",
    description: "En unik upplevelse bland trädtopparna – perfekt för par eller små familjer.",
    pricePerNight: 1650,
    maxGuests: 3,
    bedrooms: 1,
    amenities: ["Wifi", "Balkong", "Frukost inkluderad", "Naturutsikt"],
    imageUrl: "/images/treetop-cabin.jpg",
    rating: 4.8,
    available: true,
  },
  {
    id: "3",
    name: "Lakeside Cabin",
    description: "Charmig stuga precis vid sjön med egen brygga och bastu.",
    pricePerNight: 1850,
    maxGuests: 5,
    bedrooms: 2,
    amenities: ["Bastu", "Brygga", "Kök", "Grillplats", "Kamin"],
    imageUrl: "/images/lakeside-cabin.jpg",
    rating: 4.9,
    available: false,
  },
  {
    id: "4",
    name: "Mountain View Cabin",
    description: "Modern stuga med panoramafönster och fantastisk utsikt över bergen.",
    pricePerNight: 2100,
    maxGuests: 6,
    bedrooms: 3,
    amenities: ["Wifi", "Panoramautsikt", "Kök", "Eldstad"],
    imageUrl: "/images/mountain-view-cabin.jpg",
    rating: 4.6,
    available: true,
  },
  {
    id: "5",
    name: "Forest Hideaway",
    description: "En avskild stuga mitt i skogen – perfekt för en lugn weekend.",
    pricePerNight: 1300,
    maxGuests: 2,
    bedrooms: 1,
    amenities: ["Wifi", "Terrass", "Naturutsikt"],
    imageUrl: "/images/forest-hideaway.jpg",
    rating: 4.5,
    available: true,
  },
];