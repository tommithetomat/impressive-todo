import './back.scss'
import Text from './Text'
import React, { Suspense, useRef, Component} from 'react'
import TimeOfYear from '../weatherService/Date'
// import WeatherService from '../weatherService/WeatherService'
import { Canvas, render, useFrame } from '@react-three/fiber'
import { Sky, Environment, Cloud, Stars, Plane } from '@react-three/drei'

class Jumbo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // const ref = useRef()
  // useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.1))
  // const date = TimeOfYear
  render() {
    return (
      <group>
      {/* // <group ref={ref}> */}
        <Text hAlign="right" position={[-4, 0, 0]} children='t.t' />
      </group>
    )
  }
}

// class WeatherBackground extends Component {

//   constructor(props) {
//     super(props);
//     this.updateWeather();
//   }

//   state = {
//     weath: {}
//   }

//   weatherService = new WeatherService();

//   onWeatherLoaded = (weath) => {
//     this.setState({weath})
//   }

//   updateWeather = () => {
//     this.weatherService
//         .getAllWeatherParam()
//         .then(this.onWeatherLoaded)
//   } 

//   dateTime = () => {
//     const time = new Date().toUpperCase();

//     const options = {
//       era: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       weekday: 'long',
//       timezone: 'UTC+3',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     }

//     return time.toLocaleString("ru", options);
//   }


//   render() {
//     const {weath: {weather_id, weather_icon, temp, feels_like}} = this.state;
//     return(
//       <div></div>
      
//     )
//   }
// }

export default function Background() {
  return(
    <Canvas camera={{ position: [0, 0, 40] }}>
      <ambientLight intensity={2} />
      {/* <pointLight position={[40, 40, 40]} /> */}
      {/* <Suspense fallback={null}> */}
        <Jumbo />
        {/* <Sky /> */}
        <Stars radius={50} depth={50} count={5000} factor={2} saturation={2} fade speed={0.5} />
        <Cloud speed={0.1} className="cloud" opacity={0.8} position={[-15,10,40]} color={['black']}/>
        <Cloud opacity={0.8} position={[-10,10,40]} color={['black']}/>
        <Cloud opacity={0.8} position={[-5,10,40]} color={['black']}/>
        <Cloud opacity={0.8} position={[0,10,40]} color={['black']}/>
        <Cloud opacity={0.8} position={[5,10,40]} color={['black']}/>
        <Cloud opacity={0.8} position={[10,10,40]} color={['black']}/>
        <Cloud speed={0.3} opacity={1} position={[15,10,40]} color={['white']}/>
        {/* <Environment preset="city" /> */}
      {/* </Suspense> */}
      <Plane args={[10, 10]} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}></Plane>
      <meshBasicMaterial color="white" />
    </Canvas>
  )
}
