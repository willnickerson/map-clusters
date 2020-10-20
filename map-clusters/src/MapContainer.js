import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import Clusters from './Clusters';

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCluster: null
    }
  }

  // ADD HANDLERS FOR MOUSE EVENTS

  render () {
    const { clusters, radiusFunction, weightFunction } = this.props
    const { selectedCluster } = this.state
    const showInfoWindow = clusters.length && selectedCluster

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={3}
          initialCenter={{
            lat: 0,
            lng: 0
          }}
        >
          {clusters.length && (
            <Clusters
              clusters={this.props.clusters}
              radiusFunction={radiusFunction}
              weightFunction={weightFunction}
            />
          )}
          <InfoWindow
            visible={showInfoWindow}
            position={{
              lat: 0,
              lng: 0
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCEXXIDml1oa5TM7teCeHNmBx-VeUg5ax0'
})(MapContainer)

MapContainer.propTypes = {
  clusters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })).isRequired,
  weightFunction: PropTypes.func.isRequired,
  radiusFunction: PropTypes.func.isRequired
}
