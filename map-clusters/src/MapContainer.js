import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import Clusters from './Clusters';

class MapContainer extends Component {
  state = {
    selectedCluster: null,
    activeMarker: null,
    showingClusterWindow: false
  }

  render () {
    const { clusters } = this.props
    return (
      <div>
        <Map 
          google={this.props.google}
          zoom={5}
          initialCenter={{
            lat: 0,
            lng: 0
          }}
        >
          {clusters.length && (<Clusters clusters={this.props.clusters} />)}
          
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
    handleClick: PropTypes.func.isRequired,
    handleMouseover: PropTypes.func.isRequired,
    handleMouseout: PropTypes.func.isRequired
  }))
}

