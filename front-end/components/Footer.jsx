import styled from 'styled-components';


const Footer = () => {
    return (
        <FooterStyled>
            <div class="line">
                <hr/>
            </div>
            <div className='container_div'>
            <div className='first_div'>
                    <h3>Ressources</h3>
                    <Lien href='https://bheticonnect.com/'>✋🏾 Booster mes relations</Lien>
                    <Lien>📸 Rencontrez des investisseurs</Lien>
                    <Lien>📧 Mon Pitch Deck</Lien>
                </div>
                <div className='first_div'>
                    <h3>Bheti Connect</h3>
                    <Lien href='https://bheticonnect.com/'>✋🏾 Qui sommes nous</Lien>
                    <Lien>📸 Média</Lien>
                    <Lien>📧 Nous contacter</Lien>
                </div>
                <div className='second_div'>
                    <h3>Retrouvez-nous sur</h3>

                </div>
            </div>
            
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    
    bottom: 40px;
    left: 7vw;

.line{
    position: relative;
    width: 85vw;
    margin: auto;
    height: 1.2px;
    border: 0;
    background: black;
}
.container_div{
    display: flex;
    .second_div{
        position: relative;
        display: flex-end;
        left: 45vw;
    }
}

`
const Lien = styled.a`
    display: block;
    margin-top: 6px;

`

export default Footer