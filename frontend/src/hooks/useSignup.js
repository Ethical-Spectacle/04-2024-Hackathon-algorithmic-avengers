import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
const PORT = process.env.PORT || 6968

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, role, location, energy) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`http://localhost:${PORT}/api/user/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password, role, location, energy })
          })
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
      
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
      
            // update loading state
            setIsLoading(false)
        }
    
  }

  return { signup, isLoading, error }
}