import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
	apiKey: '1d95a44c9f164ca0a3e50ebd4d6b02d9',
});
const ParticlesOptions = {
	particles: {
		number: {
			value: 50,
			density: {
				enable: true,
				value_area: 800,
			},
		},
	},
};
class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',
			box: {},
		};
	}
	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};
	calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col*width,
      topRow: clarifaiFace.top_row*height,
      rightCol: width-(clarifaiFace.right_col*width),
      bottomRow: height -(clarifaiFace.bottom_row*height)
    }
  };
  displayFacebox = (box) =>{
    this.setState({box: box})
  }
	onSubmit = () => {
		this.setState({ imageURL: this.state.input });
		app.models
      .predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
			.then((response) => this.displayFacebox(this.calculateFaceLocation(response)))
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<div className='App'>
				<Particles className='particles' params={ParticlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onSubmit={this.onSubmit}
				/>
				<FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
			</div>
		);
	}
}

export default App;
