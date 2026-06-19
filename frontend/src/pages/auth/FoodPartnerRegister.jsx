import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const fields = [
  { label: 'Business name', name: 'businessName', type: 'text', placeholder: 'Harvest Bowl Kitchen' },
  { label: 'Contact name', name: 'contactName', type: 'text', placeholder: 'Jamie Carter' },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 91234 56789' },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'hello@kitchen.com' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Create a password' },
  { label: 'Address', name: 'address', type: 'text', placeholder: '14 Market Road, Bengaluru' },
]

export const FoodPartnerRegister = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const businessName = e.target.businessName.value
    const contactName = e.target.contactName.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const password = e.target.password.value
    const address = e.target.address.value

    try {
      const response = await axios.post('http://localhost:3000/api/auth/food-partner/register', {
        name: businessName,
        contactName,
        phone,
        email,
        password,
        address,
      }, {
        withCredentials: true,
      })

      console.log(response.data)
      navigate('/create-food')
    } catch (error) {
      console.error('Error registering food partner:', error)
    }
  }

  return (
    <main className="auth-page auth-page--partner">
      <section className="auth-shell">
        <div className="auth-panel auth-panel--content">
          <span className="auth-badge">Food partner portal</span>
          <h1 className="auth-title">Join as a food partner</h1>
          <p className="auth-description">
            Create your partner space to manage menus, prep flow, and delivery coordination with
            ease.
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
            <span>Already onboarding with us?</span>
            <Link to="/food-partner/login">Sign in</Link>
          </div>

          <div className="auth-links">
            <Link to="/user/register">User register</Link>
            <div className="auth-register-options">
              <Link to="/user/register">Register as normal user</Link>
              <Link className="is-active" to="/food-partner/register">
                Register as food partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
