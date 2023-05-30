import Navbar from '@/components/Navbar'
import Hero from '../components/Hero'
import Image from 'next/image'
import Slider from '@/components/Slider'
import { SliderData } from '../components/SliderData'
import Instagram from '@/components/Instagram'

export default function Home() {
  return (
    <main className="h-full">
      <Navbar/>
      <Hero heading="Captur Photography" message='I capture moments in nature and
      keep them alive
      ' />
      <Slider slides={SliderData}/>
      <Instagram/>
    </main>
  )
}
