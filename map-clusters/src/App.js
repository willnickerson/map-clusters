import React from 'react'
import _ from 'lodash'
import { v4 as uuidV4 } from 'uuid'
import './App.css'
import MapContainer from './MapContainer'

const clusters = [
  {
    id: uuidV4(),
    lat: 30,
    lng: 114,
    count: 60
  },
  {
    id: uuidV4,
    lat: 20,
    lng: 25,
    count: 30
  },
  {
    id: uuidV4(),
    lat: 30,
    lng: 120,
    count: 50
  },
  {
    id: uuidV4(),
    lat: 45,
    lng: -90,
    count: 45
  }
]

const NO_ZOOM_RADIUS = 3e6

function testWeightFunction (count) {
  const largestCluster = _.maxBy(clusters, cluster => cluster.count)
  return 0.2 * (count / largestCluster.count)
}

function testRadiusFunction (count) {
  const largestCluster = _.maxBy(clusters, cluster => cluster.count)
  return NO_ZOOM_RADIUS * (count / largestCluster.count)
}

function App () {
  return (
    <div className='App'>
      <MapContainer
        clusters={clusters}
        weightFunction={testWeightFunction}
        radiusFunction={testRadiusFunction}
      />
    </div>
  )
}

export default App
