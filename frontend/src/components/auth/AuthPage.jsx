import React from 'react'
import { Link } from 'react-router-dom'

const authContent = {
  user: {
    badge: 'User access',
    loginTitle: 'Welcome back',
    registerTitle: 'Create your account',
    loginDescription: 'Sign in to browse menus, track deliveries, and keep your favorite meals close.',
    registerDescription: 'Set up your account to order faster, save addresses, and stay in sync with every order.',
    panelTitle: 'Everything feels close at hand',
    panelDescription: 'A quiet, distraction-free space for orders, addresses, and everyday cravings.',
    highlights: ['Fast checkout flow', 'Live order updates', 'Saved meals and addresses'],
  },
  partner: {
    badge: 'Food partner portal',
    loginTitle: 'Step into your kitchen dashboard',
    registerTitle: 'Join as a food partner',
    loginDescription: 'Access incoming orders, menu controls, and daily operations from a calm workspace.',
    registerDescription: 'Create your partner space to manage menus, prep flow, and delivery coordination with ease.',
    panelTitle: 'Built for smooth service hours',
    panelDescription: 'Simple controls for growing brands, local kitchens, and teams that need clarity under pressure.',
    highlights: ['Order-ready workspace', 'Menu and timing control', 'Clean partner onboarding'],
  },
}

const fieldSets = {
  user: {
    login: [
      { label: 'Email address', type: 'email', placeholder: 'alex@example.com' },
      { label: 'Password', type: 'password', placeholder: 'Enter your password' },
    ],
    register: [
      { label: 'Full name', type: 'text', placeholder: 'Alex Morgan' },
      { label: 'Email address', type: 'email', placeholder: 'alex@example.com' },
      { label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210' },
      { label: 'Password', type: 'password', placeholder: 'Create a password' },
    ],
  },
  partner: {
    login: [
      { label: 'Business email', type: 'email', placeholder: 'hello@kitchen.com' },
      { label: 'Password', type: 'password', placeholder: 'Enter your password' },
    ],
    register: [
      { label: 'Outlet name', type: 'text', placeholder: 'Harvest Bowl Kitchen' },
      { label: 'Owner name', type: 'text', placeholder: 'Jamie Carter' },
      { label: 'Business email', type: 'email', placeholder: 'hello@kitchen.com' },
      { label: 'Phone number', type: 'tel', placeholder: '+91 91234 56789' },
      { label: 'City', type: 'text', placeholder: 'Bengaluru' },
      { label: 'Password', type: 'password', placeholder: 'Create a password' },
    ],
  },
}

const routeMatrix = {
  user: {
    login: {
      switchPrompt: "Don't have an account?",
      switchLabel: 'Create one',
      switchTo: '/user/register',
      alternateLabel: 'Food partner sign in',
      alternateTo: '/food-partner/login',
    },
    register: {
      switchPrompt: 'Already have an account?',
      switchLabel: 'Sign in',
      switchTo: '/user/login',
      alternateLabel: 'Food partner register',
      alternateTo: '/food-partner/register',
    },
  },
  partner: {
    login: {
      switchPrompt: "New to the partner portal?",
      switchLabel: 'Create account',
      switchTo: '/food-partner/register',
      alternateLabel: 'User sign in',
      alternateTo: '/user/login',
    },
    register: {
      switchPrompt: 'Already onboarding with us?',
      switchLabel: 'Sign in',
      switchTo: '/food-partner/login',
      alternateLabel: 'User register',
      alternateTo: '/user/register',
    },
  },
}

const registerOptions = [
  { label: 'Register as normal user', to: '/user/register', audience: 'user' },
  { label: 'Register as food partner', to: '/food-partner/register', audience: 'partner' },
]

export const AuthPage = ({ audience, mode }) => {
  const content = authContent[audience]
  const fields = fieldSets[audience][mode]
  const routes = routeMatrix[audience][mode]
  const isLogin = mode === 'login'

  return (
    <main className={`auth-page auth-page--${audience}`}>
      <section className="auth-shell">
        <div className="auth-panel auth-panel--content">
          <span className="auth-badge">{content.badge}</span>
          <h1 className="auth-title">{isLogin ? content.loginTitle : content.registerTitle}</h1>
          <p className="auth-description">
            {isLogin ? content.loginDescription : content.registerDescription}
          </p>

          <div className="auth-spotlight">
            <p className="auth-spotlight-label">{content.panelTitle}</p>
            <p className="auth-spotlight-copy">{content.panelDescription}</p>
          </div>

          <div className="auth-highlights">
            {content.highlights.map((item) => (
              <span className="auth-highlight" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="auth-panel auth-panel--form">
          <div className="auth-form-head">
            <p className="auth-kicker">{isLogin ? 'Sign in' : 'Create account'}</p>
            <h2 className="auth-form-title">
              {isLogin ? 'Keep things moving' : 'A few details to get started'}
            </h2>
            <p className="auth-form-copy">
              {isLogin
                ? 'Use your credentials to continue into your account.'
                : 'Fill in the fields below. We are only shaping the interface here.'}
            </p>
          </div>

          <form className="auth-form">
            {fields.map((field) => (
              <label className="auth-field" key={field.label}>
                <span>{field.label}</span>
                <input type={field.type} placeholder={field.placeholder} />
              </label>
            ))}

            <button className="auth-button" type="button">
              {isLogin ? 'Continue' : 'Create account'}
            </button>
          </form>

          <div className="auth-switch">
            <span>{routes.switchPrompt}</span>
            <Link to={routes.switchTo}>{routes.switchLabel}</Link>
          </div>

          <div className="auth-links">
            <Link to={routes.alternateTo}>{routes.alternateLabel}</Link>
            <div className="auth-register-options">
              {registerOptions.map((option) => (
                <Link
                  className={option.audience === audience && !isLogin ? 'is-active' : ''}
                  key={option.to}
                  to={option.to}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
