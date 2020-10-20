import React from 'react'
import PropTypes, { number } from 'prop-types'
import Cluster from './Cluster'
import { getMapProps } from './util'

const Clusters = (props) => {
  const { clusters } = props
  const mapProps = getMapProps(props)
  return clusters.map(({
    id,
    lat,
    lng,
    handleClick,
    handleMouseover,
    handleMouseout
  }) => {
    return (
      <Cluster
        {...mapProps}
        key={id}
        lat={lat}
        lng={lng}
        handleClick={handleClick}
        handleMouseover={handleMouseover}
        handleMouseout={handleMouseout}
      />
    )
  })
}

export default Clusters

Clusters.propTypes = {
  clusters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleMouseover: PropTypes.func.isRequired,
    handleMouseout: PropTypes.func.isRequired
  }))
}
