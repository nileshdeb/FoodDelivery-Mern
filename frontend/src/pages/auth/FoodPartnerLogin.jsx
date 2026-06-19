import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const fields = [
  { label: 'Business email', name: 'email', type: 'email', placeholder: 'hello@kitchen.com' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
]

export const FoodPartnerLogin = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/food-partner/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      )

      console.log(response.data)
      navigate('/create-food')
    } catch (error) {
      console.error('Error logging in food partner:', error)
    }
  }

  return (
    <main className="auth-page auth-page--partner">
      <section className="auth-shell">
        <div className="auth-panel auth-panel--content">
          <span className="auth-badge">Food partner portal</span>
          <h1 className="auth-title">Step into your kitchen dashboard</h1>
          <p className="auth-description">
            Access incoming orders, menu controls, and daily operations from a calm workspace.
          </p>

          <div className="auth-spotlight">
            <p className="auth-spotlight-label">Built for smooth service hours</p>
            <p className="auth-spotlight-copy">
              Simple controls for growing brands, local kitchens, and teams that need clarity
              under pressure.
            </p>
          </div>

          <div className="auth-highlights">
            {['Order-ready workspace', 'Menu and timing control', 'Clean partner onboarding'].map(
              (item) => (
                <span className="auth-highlight" key={item}>
                  {item}
                </span>
              ),
            )}
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
            <span>New to the partner portal?</span>
            <Link to="/food-partner/register">Create account</Link>
          </div>

          <div className="auth-links">
            <Link to="/user/login">User sign in</Link>
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
