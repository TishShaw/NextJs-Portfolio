import { Portfolio} from "../typings";

export const fetchPortfolio = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortfolio`)

    const data = await res.json()

    const portfolio: Portfolio = data.portfolio;

    return portfolio;
}