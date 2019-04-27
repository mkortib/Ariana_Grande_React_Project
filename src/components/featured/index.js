import React, { Component } from 'react'
import Carrousel from './Carrousel'
import TimeUntil from './TimeUntil'

export default class Featured extends Component {
	render() {
		return (
			<div style={{ position: 'relative' }}>

				<Carrousel />
				
				<div className="artist_name">
					<div className="wrapper">
						Ariana Grande
					</div>
				</div>

				<TimeUntil />

			</div>
		)
	}
}
