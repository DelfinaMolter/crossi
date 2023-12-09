import bannerSucursales from '@/public/banner-desktop-sucursales.png';
import Image from 'next/image';


export default function HomePage() {
  return (
    <main >
      <Image src={bannerSucursales} alt="Banner" width={1440} priority={true} />
    </main>
  )
}
