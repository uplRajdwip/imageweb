import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ImageGalrypage from '../src/component/ImageGalrypage'
// import App from '../src/services/App'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <ImageGalrypage />
    </div>
  )
}

export default Home
