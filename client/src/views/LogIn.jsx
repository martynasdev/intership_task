import React from 'react'
import httpClient from '../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { userName: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { userName: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { userName, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="User Name" name="userName" value={userName} />
							<input type="password" placeholder="Password" name="password" value={password} />
							<button>Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn