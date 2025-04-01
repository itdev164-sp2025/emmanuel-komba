import React from 'react'
import propTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BaseContainer = ({ children, flex = false, ...rest }) => {
    let Component = flex ? Flex : Box
    return <Component { ...rest}>{children}</Component>
}

BaseContainer.propTypes = {
    flex: propTypes.bool,
    as: propTypes.string,
    children: propTypes.node.isRequired
}