import { Outlet, useParams } from 'react-router-dom'

import Search from '../../ui/Search/Search'

const SearchPage = () => {
  const params = useParams()
  const exp = params.exp

  return (
    <>
      <Search value={exp} />
      <Outlet/>
    </>
  )
}

export default SearchPage