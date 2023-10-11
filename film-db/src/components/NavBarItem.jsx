import PropTypes from 'prop-types';


export default function NavBarItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text -[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-2'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired, 
  Icon: PropTypes.elementType.isRequired, 
};
