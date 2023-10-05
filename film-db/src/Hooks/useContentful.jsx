import  { createClient } from 'contentful';


const client = createClient({
  space: 'gwp51gar4wfb',
  accessToken: 'aQI1UARs-iYBWZmIA6AXhFY4v-_MmUZu9nxsb_cEToM',
  host: 'preview.contentful.com',
})

export default async function getData() { 
    const entries = await client.getEntries();
    console.log(entries)
}



