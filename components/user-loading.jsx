import { useOrganization, useUser } from '@clerk/nextjs'
import React from 'react'

const UserLoading = () => {

  const {isLoaded} = useOrganization()
  const {isLoaded: isUserLoaded} = useUser()

  return (
    <div>
      
    </div>
  )
}

export default UserLoading