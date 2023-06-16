import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center  relative w-80 mb-4 '>
        <h1 className='bg-clip-text font-semibold text-transparent  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-2xl'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border-double border-4 border-indigo-600 w-1/4  p-2 mb-10 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-24 grid-cols-4 w-full max-w-screen-xl '>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home