import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }

 


  return (
    <div>
      <section className='heading'>
        <h1>
         <FaSignInAlt/> Ingresa
        </h1>
        <p>Ingresa a tu Cuenta y Comienza la Fiesta</p>
      </section>


      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
         <input
          type="text"
          className="form-control text"
          id="username"
          name="username"
         value={username}
         placeholder="Ingrese el Nombre de Usuario"
         onChange={onChange}
         autoComplete="username"
                               />
                            </div>

       <div className='form-group'>
        <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          value={password}
          placeholder='Ingrese una Contraseña'
          onChange={onChange}
          autoComplete='current-password'
                                         />
                                  </div>

          
         <div className='form-group'>
            <button type='submit' className='btn1 btn-block'>
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login