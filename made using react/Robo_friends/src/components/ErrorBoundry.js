import React,{components}from 'react';
function ErrorBoundry(){
	constructor(props) {
		super(props);
		this.state = {
			hasError=false
		}
	}
	componentDidCatch(error,info){
		this.state({hasError:true})
	}
	render() {
		if(this.state.hasError){
			return <h1>Ooops. That is not good</h1>
		}
		return this.props.childern
	}
}
export default ErrorBoundry;