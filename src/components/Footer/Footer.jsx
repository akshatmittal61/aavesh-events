import React from 'react'
import './footer.css'
import favicon from '../../Images/eventw.png'
import logo from '../../Images/logoaavesh.jpeg'
import fb from '../../images/facebook.svg'
import ld from '../../images/linkedin.svg'
import ig from '../../images/instagram.svg'
import gh from '../../images/github.svg'

const FooterSocialIcon = ({ link, src, alt }) => {
    return (
        <div className="footer-social-icon fb">
            <a href={link} className="footer-social-icon__link">
                <img src={src} className="footer-social-icon__img" alt={alt} />
            </a>
        </div>
    )
}
const FooterEvents = ({ link, text }) => {
    return (
        <span className="footer-event">
            <a href={link} className="footer-event-link">{text}</a>
        </span>
    )
}

const Footer = ({ GoTo }) => {
    const socialicons = [
        {
            link: "https://www.facebook.com/TeamAAVESH/",
            src: fb,
            alt: "Facebook"
        },
        {
            link: "https://www.linkedin.com/company/aavesh-iiitu/",
            src: ld,
            alt: "LinkedIn"
        },
        {
            link: "https://www.instagram.com/teamaavesh/",
            src: ig,
            alt: "Instagram"
        },
        {
            link: "https://github.com/Aavesh-IIITU",
            src: gh,
            alt: "GitHub"
        }
    ]
    const events = [
        {
            link: "https://akshatmitta61.github.io/treasure",
            text: "Code Chronicles"
        },
        {
            link: "https://akshatmitta61.github.io/treasure",
            text: "Tech Trivia"
        },
        {
            link: "https://akshatmitta61.github.io/quiz",
            text: "Open, Sesame!"
        },
        {
            link: "https://akshatmitta61.github.io/meme",
            text: "What The Meme!"
        },
        {
            link: "https://akshatmitta61.github.io/ideathon",
            text: "Envision Ideathon"
        },
        {
            link: "https://akshatmitta61.github.io/stonks",
            text: "Stonks"
        },
        {
            link: "https://akshatmitta61.github.io/stonks",
            text: "Tricky Circuit"
        }
    ]
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-left-image">
                        <img className="footer-left-image__img" src={favicon} alt="Stonks favicon" onClick={() => { GoTo(0) }} />
                    </div>
                </div>
                <div className="footer-mid">
                    <div className="footer-title">
                        <span onClick={() => { GoTo(0) }}>
                        TECHतत्त्व | Aavesh | IIIT Una
                        </span>
                    </div>
                    <div className="footer-social">
                        {
                            socialicons.map((icon, index) => (
                                <FooterSocialIcon key={index} link={icon.link} src={icon.src} alt={icon.alt} />
                            ))
                        }
                    </div>
                    <div className="footer-events">
                        {
                            events.map((event, index) => (
                                <FooterEvents key={index} link={event.link} text={event.text} />
                            ))
                        }
                    </div>
                    <div className="footer-copyright">&copy; Aavesh - All rights reserved</div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-image">
                        <a className="footer-right-image__link" href="https://aavesh-iiitu.github.io/">
                            <img className="footer-right-image__img" src={logo} alt="Aavesh" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
