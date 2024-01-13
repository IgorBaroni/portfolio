import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", url:'http://www.linkedin.com/in/igorbaroni7', icon: <FaLinkedinIn /> },
    { name: "github", url:'https://github.com/IgorBaroni', icon: <FaGithub /> },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.url} target='_blank' className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks