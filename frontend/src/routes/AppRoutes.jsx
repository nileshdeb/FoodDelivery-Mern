import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { ChooseRegister } from '../pages/auth/ChooseRegister'
import { FoodPartnerLogin } from '../pages/auth/FoodPartnerLogin'
import { FoodPartnerRegister } from '../pages/auth/FoodPartnerRegister'
import { UserLogin } from '../pages/auth/UserLogin'
import { UserRegister } from '../pages/auth/UserRegister'
import { Home } from '../pages/general/Home'
import { CreateFood } from '../pages/food-partner/CreateFood'


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="*" element={<Navigate to="/user/login" replace />} />
        <Route path="/create-food" element={<CreateFood />} />
      </Routes>
    </Router>
  )
}
