import logoHeaderFoodExplorer from '../../assets/logoHeaderFoodExplorer.svg'
import logoShadow from '../../assets/logoShadow.png'

import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/auth';
import {useState} from "react";

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form} from './styles';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const {signIn, loading} = useAuth();

    function handleSignIn() {
        signIn({email, password});
    };

    function handleToSignUp() {
        navigate("/SignUp");
    };

    return(
        <Container>
            <div className='wrapper_logo'>
                <img id='logo' src={logoHeaderFoodExplorer} alt="logo Header Food Explorer" />
                <img id='logoShadow' src={logoShadow} alt="logo Header Food Explorer" />
            </div>

            <Form>
          
                <h1>Faça seu login</h1>

                <label>
                    Email
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        onChange={e=>setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Senha
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        maxLength="10"
                        onChange={e=>setPassword(e.target.value)}
                    />
                </label>
                <Button 
                title={loading ? 'Loading...' : 'Entrar'} 
                onClick={handleSignIn}
                />

                <div>
                    <a onClick={handleToSignUp}>
                        Criar uma conta
                    </a>
                </div>
            </Form>
        </Container>
    )
}