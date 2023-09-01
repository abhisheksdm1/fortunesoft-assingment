import Gener from '@/components/Gener'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <Gener title="Action" />
     <Gener title="Crime"/>
     <Gener title="Drama"/>
    </main>
  )
}
