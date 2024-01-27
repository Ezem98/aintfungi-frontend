import { NavBar, NavBarItems, NavBarItem, IconButtons } from './NavbarElements'
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export const Navbar = () => {
  return (
    <NavBar>
      <NavBarItems>
        <NavBarItem>Remeras</NavBarItem>
        <NavBarItem>Buzos</NavBarItem>
        <NavBarItem>Gorros</NavBarItem>
        <NavBarItem>Bermudas</NavBarItem>
        <NavBarItem highlighted>SALE</NavBarItem>
      </NavBarItems>
      <IconButtons>
        <IconContext.Provider value={{ color: '#F0972D', size: '1.8rem', className: 'icon-buttons' }}>
          <AiOutlineSearch />
          <AiOutlineShopping />
        </IconContext.Provider>
      </IconButtons>
    </NavBar>
  )
}
