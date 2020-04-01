import React from 'react';
import './ImageLinkForm.css'
function ImageLinkFrom(){
	return(
		<div>
			<p className="f3">
				{'This Magic Brain will detect faces in your pictures'}
			</p>
			<div className='center'>
				<div className='br3 pa4 shadow-5 center form'>
				<input className='f4 pa2 w-70 centered' type="text" name="" id=""/>
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-green' style={{border:'0px'}} >Detect</button>
				</div>
			</div>
		</div>
	);
}
export default ImageLinkFrom;