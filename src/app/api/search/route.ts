import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  console.log(query)

  const res = await fetch('https://www.virginholidays.co.uk/cjs-search-api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"bookingType": "holiday", "location":"orlando","departureDate":"16-07-2024","duration":"7","gateway":"LHR","direct":false,"partyCompositions":[{"adults":2,"childAges":[],"infants":0}]}),
  })
 
  const data = await res.json()
 
  return Response.json(data)
}