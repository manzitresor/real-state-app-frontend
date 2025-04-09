import { IconType } from "react-icons";

export interface StatisticProps {
    icon: IconType,
    title: string,
    description: string,
}

export interface PropertyList {
    id: number,
    price: number,
    image: string,
    name: string,
    description: string,
    beds: number,
    bathRooms: number,
    size: string
}
