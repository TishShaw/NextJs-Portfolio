import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Portfolio } from "../../typings";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type== "portfolio"][0]
`

type Data = {
    portfolio: Portfolio
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const portfolio: Portfolio = await sanityClient.fetch(query)

    res.status(200).json({ portfolio })
}