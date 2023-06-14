import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center text-emerald-500 hover:text-pink-500 fixed z-10 top-0 w-full py-5 px-8 text-xl font-light'>
      <ul className='flex items-center gap-8'>
        <li className='font-semibold text-lg '>
          <NavLink to='/'>
            Sakura Store
          </NavLink>
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className= {({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-8'>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          Melisa Manios
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li className=' font-semibold text-violet-500  hover:text-cyan-400'>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-cyan-400 hover:text-violet-400'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar