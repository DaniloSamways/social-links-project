import type { NextPage } from 'next'
import { Card } from '../components/Card'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card />
    </div>
  )
}

export default Home
