import { useEffect } from "react"

export const count = async () => {
  const counterApiKey = process.env.COUNTER_API_KEY
  const data = await fetch(
    "https://api.api-ninjas.com/v1/counter?id=tobcraft.xyz&hit=true",
    {
      //@ts-ignore
      headers: {
        "X-Api-Key": counterApiKey,
      },
      cache: "no-cache",
    }
  ).then((res) => res.json())
  return data
}

export const Counter = async () => {
  return <>Site views: {(await count()).value}</>
}
