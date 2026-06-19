import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const fields = [
  { label: 'Email address', name: 'email', type: 'email', placeholder: 'alex@example.com' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
]

export const UserLogin = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const response = await axios.post(
      'http://localhost:3000/api/auth/user/login',
      {
        email,
        password,
      },
      { withCredentials: true }
    )

    console.log(response.data)
    navigate('/home')
  }
  return (
    <main className="auth-page auth-page--user">
      <section className="auth-shell">
        <div className="auth-panel auth-panel--content">
          <span className="auth-badge">User access</span>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-description">
            Sign in to browse menus, track deliveries, and keep your favorite meals close.
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
            <p className="auth-kicker">Sign in</p>
            <h2 className="auth-form-title">Keep things moving</h2>
            <p className="auth-form-copy">Use your credentials to continue into your account.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <label className="auth-field" key={field.label}>
                <span>{field.label}</span>
                <input name={field.name} type={field.type} placeholder={field.placeholder} />
              </label>
            ))}

            <button className="auth-button" type="submit">
              Continue
            </button>
          </form>

          <div className="auth-switch">
            <span>Don't have an account?</span>
            <Link to="/user/register">Create one</Link>
          </div>

          <div className="auth-links">
            <Link to="/food-partner/login">Food partner sign in</Link>
            <div className="auth-register-options">
              <Link to="/user/register">Register as normal user</Link>
              <Link to="/food-partner/register">Register as food partner</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
