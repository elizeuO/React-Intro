import React from 'react'
import { useState } from 'react';

import './MyForm.css';

const MyForm = ({ userName, userEmail }) => {

    // 3 - gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const [bio, setBio] = useState('');

    const [role, setRole] = useState('');

    const handleName = (ev) => {
        setName(ev.target.value);
    }

    //5 - envio de form
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(name, email, bio, role)

        //Validação
        //Envio

        //7 - limpar o form
        setName('');
        setEmail('');
        setBio('');
        setRole('');
    }

    return (
        <div>
            {/* 1- Criação de form */}
            {/* 5 - envio de formulario*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite o seu nome'
                        onChange={handleName}
                        //6 - controlled input
                        value={name || ''}
                    />

                </div>

                {/* 2 - label envolvendo input */}
                <label>
                    <span>
                        E-mail:
                        <input type="text" name="email" placeholder='Digite o seu e-mail'
                            //4 - Simplificando manipulação
                            onChange={(ev) => setEmail(ev.target.value)}
                            //6 - controlled input
                            value={email || ''}
                        />
                    </span>
                </label>

                {/* 8 - textarea*/}
                <label >
                    <span>
                        Bio:
                    </span>
                    <textarea name="bio" placeholder='Descrição do usuário'
                        onChange={(ev) => setBio(ev.target.value)} value={bio}>
                    </textarea>
                </label>

                {/* 9 - Select */}
                <label>
                    <span>
                        Função no sistema
                        <select name="role"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>

                        </select>
                    </span>
                </label>


                <input type="submit" value="Enviar" />
            </form>

        </div>
    )
}

export default MyForm