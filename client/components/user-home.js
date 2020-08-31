import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import openSocket from 'socket.io-client'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, firstName, lastName, accountType} = props
  const socket = openSocket(`${location.origin}/`)

  // console.log('user home props ', props)
  return (
    <div>
      <h1>{`Welcome ${firstName} ${lastName}`}</h1>
      <h2>{`email: ${email}`}</h2>
      <h2>{`account type: ${accountType}`}</h2>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    id: state.user.me.id,
    email: state.user.me.email,
    firstName: state.user.me.firstName,
    lastName: state.user.me.lastName,
    accountType: state.user.me.accountType,
    socket: state
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
