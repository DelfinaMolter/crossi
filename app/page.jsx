import Image from 'next/image';
import WelcomeComponent from './components/welcome/welcome'
import SocialMediaTitle from './components/social/social-home'
import './components/welcome/welcome.css';
import './page.css';
import Info from './components/info/info'
import MasonryImageList from './components/img-board/board'
import Recarga from './components/recarga/recarga'

export default function HomePage() {
  return (
    <main >
      <div className="banner">
        <Image src="/banner-home.png" alt="Banner Sucursales" width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }}/>
      </div>
      <WelcomeComponent className="welcome-container" />
      <Info />
      {/* Social media? Vale la pena ponerlo? Esta en el footer la misma Info */}
      <SocialMediaTitle />
      <MasonryImageList />
      <Recarga />
    </main>
  )
}
