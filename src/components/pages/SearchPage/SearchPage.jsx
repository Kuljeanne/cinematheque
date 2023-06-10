import { Outlet } from 'react-router-dom'

import Search from '../../ui/Search/Search'

const SearchPage = () => {


  return (
    <>
      <Search />
      <Outlet/>
    </>
  )
}

export default SearchPage