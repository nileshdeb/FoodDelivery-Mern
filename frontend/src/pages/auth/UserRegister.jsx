import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const fields = [
  { label: 'First name', name: 'firstName', type: 'text', placeholder: 'Alex' },
  { label: 'Last name', name: 'lastName', type: 'text', placeholder: 'Morgan' },
  { label: 'Email address', name: 'email', type: 'email', placeholder: 'alex@example.com' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Create a password' },
]

export const UserRegister = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const email = e.target.email.value
    const password = e.target.password.value

    const response = await axios.post('http://localhost:3000/api/auth/user/register', {
      fullName: `${firstName} ${lastName}`.trim(),
      email,
      password,
    },{
        withCredentials: true,
    })
    console.log(response.data)
    navigate('/home')
  }

  return (
    <main className="auth-page auth-page--user">
      <section className="auth-shell">
        <div className="auth-panel auth-panel--content">
          <span className="auth-badge">User access</span>
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-description">
            Set up your account to order faster, save addresses, and stay in sync with every
            order.
          </p>

          <div className="auth-spotlight">
            <p className="auth-spotlight-label">Everything feels close at hand</p>
            <p className="auth-spotlight-copy">
              A quiet, distraction-free space for orders, addresses, and everyday cravings.
            </p>
          </div>

          <div className="auth-highlights">
            {['Fast checkout flow', 'Live order updates', 'Saved meals and addresses'].map((item) => (
              <span className="auth-highlight" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="auth-panel auth-panel--form">
          <div className="auth-form-head">
            <p className="auth-kicker">Create account</p>
            <h2 className="auth-form-title">A few details to get started</h2>
            <p className="auth-form-copy">
              Fill in the fields below. We are only shaping the interface here.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <label className="auth-field" key={field.label}>
                <span>{field.label}</span>
                <input name={field.name} type={field.type} placeholder={field.placeholder} />
              </label>
            ))}

            <button className="auth-button" type="submit">
              Create account
            </button>
          </form>

          <div className="auth-switch">
            <span>Already have an account?</span>
            <Link to="/user/login">Sign in</Link>
          </div>

          <div className="auth-links">
            <Link to="/food-partner/register">Food partner register</Link>
            <div className="auth-register-options">
              <Link className="is-active" to="/user/register">
                Register as normal user
              </Link>
              <Link to="/food-partner/register">Register as food partner</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
