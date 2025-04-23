import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const StyledButton = styled(BaseButton)`
 ${({ theme, variant }) => theme.variants.iconButton[variant || 'primary']}
`

export const IconButton = styled(({ icon, ...rest}) => {
    const clone = React.isValidElement(icon)
    ? React.cloneElement(icon, rest)
    : null;
    return <StyledButton {...rest} className={rest.className}>{clone}</StyledButton>
})`
  // We could add styles here, but it is not necessary
  // The main reason this is a styled componenet is to wrap the styled icon passed in as a prop
`

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired
}