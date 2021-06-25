import PropTypes from "prop-types"
import React from "react"
import "typeface-inter"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
