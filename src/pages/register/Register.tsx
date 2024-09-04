import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { registerUser } from '../../services/Service'
import './Register.css'

function Register() {

  let navigate = useNavigate()

  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  const [userResponse, setUserResponse] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  useEffect(() => {
    if (userResponse.id !== 0) {
      back()
    }
  }, [userResponse])

  function back() {
    navigate('/login')
  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value)
  }

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function registerNewUser(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmPassword === user.password && user.password.length >= 8) {

      try {
        await registerUser(`/users/register`, user, setUserResponse)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUser({ ...user, password: "" }) // Reinicia o campo de Senha
      setUserResponse("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="backgroundRegister hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={registerNewUser}>
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={user.name} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 border-slate-700 rounded p-2"
              value={user.email} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="photo">Foto</label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={user.photo} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={user.password} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmPassword(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={back}>
              Cancelar
            </button>
            <button className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register