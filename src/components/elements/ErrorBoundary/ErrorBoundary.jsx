import PropTypes from 'prop-types'
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.element.isRequired,
  children: PropTypes.element
}

export default ErrorBoundary
