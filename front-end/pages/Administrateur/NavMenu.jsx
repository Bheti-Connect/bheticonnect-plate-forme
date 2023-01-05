import React from 'react'
import styled from 'styled-components'
import logoBheti from './../../assets/images/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor, faDollar, faComment, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const NavMenu = () => {





  return (
    <Container>
        <ul>
            <li>
                <a className='logo' href="#">
                    <Image src={logoBheti} alt='logo bheti' />
                </a>
            </li>
            <li className='button afterLogo'><a href="#">
                <FontAwesomeIcon className='icon' icon={faHouse} />
                <span className="nav-item">Dashboard</span>
            </a></li>
            <li  className='button'><a href="#">
                <FontAwesomeIcon className='icon' icon={faUserDoctor} />
                <span className="nav-item">Investisseur</span>
            </a></li>
            <li  className='button'><a href="#">
            <FontAwesomeIcon className='icon' icon={faDollar} />
                <span className="nav-item">Money</span>
            </a></li>
            <li  className='button'><a href="#">
                <FontAwesomeIcon className='icon' icon={faComment} />
                <span className="nav-item">Commentaire</span>
            </a></li>
            <li  className='button'><a href="#" className='setting'>
                <FontAwesomeIcon className='icon' icon={faGear} />
                <span className="nav-item">Parametre</span>
            </a></li>
            <li  className='button'><a href="#" className='logout'>
                <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
                <span className="nav-item">Deconnexion</span>
            </a></li>
        </ul>
    </Container>
  )
}




// style CSS

const Container = styled.nav`
position: absolute;
top:0;
bottom: 0;
height: 100%;
left:0;
background: #641C1C;
width: 90px;
overflow:hidden;
transition: width 0.2s linear;

&:hover{
    width: 280px;
    transition: all 0.5s ease;
}

ul li{
    list-style: none;
}


ul{
    padding: 0;
}




.logo{
    display: flex;
    justify-content: start;
    transition: all 0.5s ease;
    margin: 10px 0 0 20px;

    img {
        width: 45px;
        height: 45px;
    }
}

.button a{
    position:relative;
    color: white;
    font-size: 14px;
    display:table;
    width: 300px;
    padding: 10px;

    &:hover{
       text-decoration: underline;
    }

}

.icon{
    position: relative;
    width: 30px;
    height: 30px;
    left: 14px;
    top:14px;
    font-size: 20px;
    text-align: center;
    color: #641C1C;
    background: white;
    border-radius: 10px;
    padding: 5px
}

.button .nav-item{
    position: relative;
    top: 0;
    margin-left: 45px;
    font-family: "Inter", sans-serif;
}

.button .logout{
    position: absolute;
    bottom: 30px;
}

.button .setting{
    position: absolute;
    bottom: 100px;
}

.afterLogo{
    margin-top: 60px;
}


`;

export default NavMenu