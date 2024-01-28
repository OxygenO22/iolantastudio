import React from 'react'
import { useAppSelector } from '../../hooks/Hooks'

export const Aboutpage = () => {
  const users = useAppSelector((state) => state.users.list)
  return (
    <ul>
      {
       users.map( user => 
        <li key={user.id}>
          {user.name}
        </li>
        )
      }
    </ul>
  )
}
