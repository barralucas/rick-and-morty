import logoImg from '../../assets/logo-header.png';
import './header.scss';


export function Header() {
    return (
        <div>
            <h1>Ricky and Morty's Search</h1>
            <img src={logoImg} alt="ricky and morty" />
        </div>
    );
}