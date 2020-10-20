import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from 'google-maps-react'
import { getMapProps } from './util'

const Cluster = (props) => {
  const { lat, lng } = props
  const mapProps = getMapProps(props)

  return (
    <Circle
      {...mapProps}
      radius={1000}
      center={{
        lat,
        lng
      }}
      strokeColor='transparent'
      strokeOpacity={0}
      fillColor='FF0000'
      fillOpacity={0.5}
    />
  )
}

export default Cluster

Cluster.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseover: PropTypes.func.isRequired,
  handleMouseout: PropTypes.func.isRequired
}
