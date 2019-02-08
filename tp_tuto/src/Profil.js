import React from 'react' 

export default class Profil extends React.Component()
{
	constructor(props)
	{
		super(props);
		this.state = {
			name: this.props.name;
		}
		
	}

	render(){
		return(){
			<div>
				<p>{this.state.name}</p>
			</div>
		}
	}
}