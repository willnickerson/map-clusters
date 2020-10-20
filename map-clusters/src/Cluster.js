import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from 'google-maps-react'
import { getMapProps } from './util'

const Cluster = (props) => {
  const { lat, lng, weight, radius } = props
  const mapProps = getMapProps(props)
  const zoom = mapProps.map ? mapProps.map.zoom : 1

  return (
    <Circle
      {...mapProps}
      radius={radius / zoom}
      center={{
        lat,
        lng
      }}
      strokeColor='transparent'
      strokeOpacity={0}
      fillColor='#FF0000'
      fillOpacity={weight}
    />
  )
}

export default Cluster

Cluster.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseover: PropTypes.func.isRequired,
  handleMouseout: PropTypes.func.isRequired
}
