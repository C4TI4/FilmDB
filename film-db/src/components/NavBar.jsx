import { useState } from 'react';
import {NavLink} from "react-router-dom"
import Logo from '../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import NavBarItem from './NavBarItem';

function NavBar() {
    const [searchQuery, setSearchQuery] = useState('');
    // const [search, setSearch] = useState([]);
    const [toggle, setToggle] = useState(false);

   // Fetch data from Contentful based on the searchQuery

//   const fetchData = async () => {
//     useEffect(() => {
//             try {
//                 const response = await axios.get(
//                     `https://cdn.contentful.com/spaces/gwp51gar4wfb/entries?access_token=em2LoVg8vTVQJlAIgQpARAigO4zS715njiG3S_jLwTA&content_type=movie&query[fields.title]=${title}&query[fields.year]=${year}&query[fields.director]=${director}`
//                     );
//                 // Update the menu state with fetched data
//                 setSearch(response.data.items);
//             } catch (error) {
//                 console.error('Error fetching data', error);
//             }
//         };

//         fetchData();
//     }, [searchQuery]);


    const menu =[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'TRENDING',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ];

    // // Filter menu items based on the search query
    // const filteredMenu = menu.filter((item) =>
    //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

return (
    <div className ='flex items-center justify-between p-5'>
    <div className ='flex gap-8 items-center' >
        <img src={Logo} className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
            {menu.map((item, index) => (
                <NavBarItem key={index} name={item.name} Icon={ item.icon } />
            ))}
        </div>
        <div className='flex md:hidden gap-5'>
            {menu.map(( item, index ) => index < 3 && (
                <NavBarItem key = {index} name={''} Icon={item.icon} />
            ))}
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>  
        
            {/* {menu.map((item)=>(
            <NavBarItemItem name={item.name} Icon={item.icon} />
            ))}      */}
                <NavBarItem  name={''} Icon={HiDotsVertical} />
            {toggle
                ? <div className='absolute mt-3 bg-[#f3f1f1] border-[1px] border-gray-700 p-3 px-5 py-4'>
                    {menu.map((item,index) => index > 2 && (
                        <NavBarItem key={index} name= {item.name} Icon={item.icon} />
                    ))}
                </div> 
                : null}
            </div> 
        </div>
    </div>
    <div className='relative flex items-right'>
                <HiMagnifyingGlass className='m-3' />
                <input
                    type='text'
                    placeholder= ''
                    className='border rounded-md px-3 py-1 mr-3  focus:outline-none pl-8'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    className='w-[40px] rounded-full'/>
                </div>

              
    
    </div>
);

}

export default NavBar;