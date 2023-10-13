//import area

//2 Defenation area
  export async function POST(req) {
     //Every function return somthing
     const { city,area } = await req.json()

                       //object.property.property 
     const searchParams = req.nextUrl.searchParams
     const query = searchParams.get('searchReferer')
     return Response.json
     ({
       "City": city,
       "Area": `${area}`,
       "msg": `${query}`
   } )
  }


//3 export area