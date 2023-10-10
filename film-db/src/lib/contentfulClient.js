import  { createClient } from 'contentful';


const client = createClient({
  // hid or code in .env.local file which is on same level as package.json
  
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

// export default async function getData() { 
//     const entries = await client.getEntries();
//     console.log(entries)
// }


// export { getSlides };

export default client;


