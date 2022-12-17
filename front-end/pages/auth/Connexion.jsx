import React, { useEffect, useState } from "react";
import * as Components from './Components';
import AutoGreet from '../../components/AutoGreet';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LinkedIn from '../../assets/images/LinkedIn_Logo_Black.png'

function Connexion() {
    const [signIn, toggle] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const router = useRouter()

    const tackleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const tacklePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    let credentials = { email, password }

    const HandleLogin = async (e) => {
        const url = new URL(
            "https://bheti-connect.smirltech.com/api/login"
        );
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        e.preventDefault();
        let result = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(credentials),
        }).then(response => response.json());
        console.warn(email, password)
        if (result.success) {
            localStorage.setItem("user-info", JSON.stringify(result));
            if (result.data.role == null) {
                router.push('/Etape-Suivante')
            } else if (result.data.role == 'investisseur') {
                router.push('/Investisseur/Accueil');
            } else if (result.data.role == 'entrepreneur') {
                router.push('/Entrepreneur/Accueil');
            }
        }
    }

    let signup_data = { name, email, password, confirmPass };

    const HandleSignUp = async (e) => {
        const url = new URL(
            "https://bheti-connect.smirltech.com/api/register"
        );
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        e.preventDefault();
        let result = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(signup_data),
        }).then(response => response.json());
        if (result.success) {
            localStorage.setItem("user-info", JSON.stringify(result));
            router.push('/Etape-Suivante')
        }
    }

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Anchor className='small_paragraph'>Inscrivez-vous avec</Components.Anchor>
                    <Components.LinkedinDiv>
                        <Components.GotoLinkedin href="https://bheti-connect.smirltech.com/login/linkedin">
                            <Components.LinkedinButton>
                                LinkedIn
                            </Components.LinkedinButton>
                        </Components.GotoLinkedin>
                        <Components.Image>
                            <Image src={LinkedIn} alt='Linkedin Logo' className='logo_LinkedIn'/>
                        </Components.Image>
                    </Components.LinkedinDiv>
                    <Components.OtherConnexion> - Ou - </Components.OtherConnexion>
                    <Components.Title>Créer un Compte</Components.Title>
                    <Components.Input type='text' placeholder='Nom Complet' value={name} onChange={(e) => setName(e.target.value)} />
                    <Components.Input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Components.Input type='password' placeholder='Mot de Passe' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Components.Input type='password' placeholder='Confirmez le mot de passe' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    <Components.Button type="submit" onClick={HandleSignUp}>Je m'inscris</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Connexion</Components.Title>
                    <Components.Input type='email' onChange={tackleEmailChange} placeholder='E-mail' />
                    <Components.Input type='password' onChange={tacklePasswordChange} placeholder='Mot de Passe' />
                    <Components.Anchor href='#'>J'ai oublié le mot de passe !</Components.Anchor>
                    <Components.Button type="submit" onClick={HandleLogin}>Connexion</Components.Button>
                    <Components.OtherConnexion> - Ou - </Components.OtherConnexion>
                    <Components.Anchor className='small_paragraph'>Connectez-vous via</Components.Anchor>
                    <Components.LinkedinDiv>
                        <Components.GotoLinkedin href="https://bheti-connect.smirltech.com/login/linkedin">
                                LinkedIn
                        </Components.GotoLinkedin>
                        <Components.Image>
                            <Image src={LinkedIn} alt='Linkedin Logo' className='logo_LinkedIn'/>
                        </Components.Image>
                    </Components.LinkedinDiv>
                </Components.Form>
            </Components.SignInContainer>
            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Bon retour!</Components.Title>
                        <Components.Paragraph>
                            Déjà inscris sur la plate-forme? Veuillez vous connecter à l'aide vos identifiants.
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => {
                            setEmail('');
                            setPassword('');
                            toggle(true);
                        }}>
                            Connexion
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title><AutoGreet /></Components.Title>
                        <Components.Paragraph>
                            Inscrivez-vous et commencez votre expérience avec nous
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => {
                            setEmail('');
                            setPassword('');
                            toggle(false);
                        }}>
                            Inscription
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default Connexion;