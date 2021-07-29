import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    return (
        <header style={headingStyle} className="header">
            <div>{title}</div>
            <Button color='green' text='green' />
        </header>
    )
}

Header.defaultProps = {
    title:'default props'
}

Header.propTypes = {
    title:PropTypes.string,
}

const headingStyle = {
    color: '#343434',
    backgroundColor: '#dedede'
}


export default Header
