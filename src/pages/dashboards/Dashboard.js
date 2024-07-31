import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Dashboard.module.css';


const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const jwt_token = localStorage.getItem('access')


  useEffect(() => {
    if(jwt_token === null && !user) {
      navigate("/login")
    }
  })

  return (
    <Fragment>
      <div>
        <h2>Hi {user && user.name} </h2>
        <h5>Welcome to Your Dashboard</h5>
      </div>
    </Fragment>
  )
}

export default Dashboard