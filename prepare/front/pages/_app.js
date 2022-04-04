import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head'

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
}

NodeBird.propTypes = {
  // props Types 로 점검 해두면 좀더 서비스의 안정성이 높아진다
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird
