import LogoFacebook from '../../src/assets/images/social_media/Facebook - Negative.png';
import LogoInstagram from '../../src/assets/images/social_media/Instagram - Negative.png';
import LogoTikTok from '../../src/assets/images/social_media/TikTok - Negative.png';
import LogoTwitter from '../../src/assets/images/social_media/Twitter - Negative.png';
import LogoYouTube from '../../src/assets/images/social_media/YouTube - Negative.png';
import LogoFull from '../assets/icons/Logo_full.png';

function Footer() {
    return (
        <footer className="bg-dark border-top text-white p-4">
            <div className="container text-center">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 p-3">
                            <img src={LogoFull} className="d-inline-block align-top img-fluid footerLogo" alt="logo" />
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <ul className="nav justify-content-end">
                                <li className="nav-item p-2">
                                    <a href="https://www.facebook.com/Juntosporlosdemas/"><img src={LogoFacebook} width="27" className="d-inline-block align-top" alt="Juntos por los Démas | Facebook" /></a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="https://www.instagram.com/juntosporlosdemasac/"><img src={LogoInstagram} width="27" className="d-inline-block align-top" alt="Juntos por los Démas | Instagram" /></a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="https://www.tiktok.com/@juntosxlosdemas"><img src={LogoTikTok} width="27" className="d-inline-block align-top" alt="Juntos por los Démas | TikTok" /></a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="https://x.com/JuntosDemasAC?t=Zlybkf-_8RCdOSoLLnkBXg&s=09"><img src={LogoTwitter} width="27" className="d-inline-block align-top" alt="Juntos por los Démas | Twitter" /></a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="https://www.youtube.com/channel/UCGjWTZuDG_Lc2P6I0o5oYZA"><img src={LogoYouTube} width="27" className="d-inline-block align-top" alt="Juntos por los Démas | YouTube" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 p-3">
                            <span className="">© 2023 Juntos por los Demás</span>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link link-secondary" href="https://drive.google.com/file/d/1dxLKK-qM2SZoJcKxzhN52G7mXK6g7lJ1/view">Avisos de privacidad</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;