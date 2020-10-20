import React from 'react'
import PropTypes from 'prop-types'
import Cluster from './Cluster'
import { getMapProps } from './util'

const Clusters = (props) => {
  const { clusters, radiusFunction, weightFunction } = props
  const mapProps = getMapProps(props)
  return clusters.map(({
    id,
    lat,
    lng,
    count,
    handleClick,
    handleMouseover,
    handleMouseout
  }) => {
    return (
      <Cluster
        {...mapProps}
        key={id}
        count={count}
        radius={radiusFunction(count)}
        weight={weightFunction(count)}
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
    radius: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleMouseover: PropTypes.func.isRequired,
    handleMouseout: PropTypes.func.isRequired
  })),
  weightFunction: PropTypes.func.isRequired,
  radiusFunction: PropTypes.func.isRequired
}
