import {
  HeaderContainer,
  HeaderTab
} from './HeaderElements'

import { Logo } from '../Logo'

export const Header = () => {
  return (
    <HeaderContainer className='Header'>
      <HeaderTab background='#FCF2DF'>
        <Logo width='15%' src={require('../../assets/images/logo-icon.png')} />
        <span>AIN'T</span>
        <span>FUNGI</span>
      </HeaderTab>
      <HeaderTab background='#102052' cursor onClick={() => window.location.assign('https://www.google.com/')}>
        <img src={require('../../assets/images/unicorn.png')} alt='unicorn' style={{ position: 'absolute', left: 0 }} />
        <img src={require('../../assets/images/IMG-20220706-WA0021 1.png')} alt='aint' style={{ position: 'absolute', left: '40%' }} />
        <img src={require('../../assets/images/nft-text.png')} alt='nft' style={{ position: 'absolute', left: '65%', bottom: '10%' }} />
      </HeaderTab>
      <HeaderTab background='#A9549A' color='#CED60A' fontFamily='JUNAR' fontSize='12px'>
        ENVIOS GRATIS A PARTIR DE AR$ 20.000
      </HeaderTab>
    </HeaderContainer>
  )
}
