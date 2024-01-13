import Avatar from '../assets/img/pfp.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Igor Baroni" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  )
}

export default Sidebar