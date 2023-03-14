import {
    ArrowLeftOutlined, 
    UserOutlined, 
    MailOutlined, 
    LockOutlined, 
    CameraOutlined,
    GithubFilled
} from '@ant-design/icons';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {api} from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.png';
import {useAuth} from '../../hooks/auth';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form, Avatar} from './style';

export function Profile() {
    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordNew, setPasswordNew] = useState();
    const [passwordOld, setPasswordOld] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        const userUpdated = Object.assign(user, updated);
        await updateProfile({user: userUpdated, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <Container>
            <div className="ButtonTurnBack">
                <ArrowLeftOutlined />
                <button type="buttom" onClick={handleBack}>
                    Voltar
                </button>
            </div>

            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário"
                    />
                    <label htmlFor="avatar">
                        <CameraOutlined />
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <div className="wrapper_input">
                    <Input 
                        type="text"
                        icon={UserOutlined}
                        placeholder="Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        type="text"
                        icon={MailOutlined}
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    <Input 
                        type="password"
                        icon={LockOutlined}
                        placeholder="Senha atual" 
                        onChange={e => setPasswordOld(e.target.value)}
                    />
                    <Input 
                        type="password"
                        icon={LockOutlined}
                        placeholder="Nova senha" 
                        onChange={e => setPasswordNew(e.target.value)}

                    />
                </div>

                <Button onClick={handleUpdate} title="Enviar" />

                <div className="social">
                    <a 
                    target="_blank" href="https://github.com/Romeusorionaet">
                        <GithubFilled />
                    </a>
                </div>
            </Form>
        </Container>
    )
}