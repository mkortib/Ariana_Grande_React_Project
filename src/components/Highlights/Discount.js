import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Button from '../utils/MyButton'

export default class Discount extends Component {

	state = {
		discountStart: 0,
		discountEnd: 30 
	}

	porcentage = () => {
		if (this.state.discountStart < this.state.discountEnd) {
			this.setState({
				discountStart: this.state.discountStart + 1
			})
		}
	}

	componentDidUpdate() {
		setTimeout(() => {
			this.porcentage();
		}, 30)
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="discount_wrapper">

					<Fade
						onReveal={() => this.porcentage()}
					>
						<div className="discount_porcentage">
							<span>{this.state.discountStart}%</span>
							<span>OFF</span>
						</div>
					</Fade>

					<Slide right>
						<div className="descount_description">
							<h3>Purchase tickets before 20th June</h3>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id quasi ipsum a voluptatibus corporis est necessitatibus inventore voluptatum dolor vero, expedita magnam eos iste doloremque vel aperiam maiores similique eum. Odio quos consequatur accusantium at vero quia ipsum officiis et error eligendi? Voluptatum, quod nam eveniet officia obcaecati vitae.</p>
							<Button 
								text="Purchase tickets"
								bck="#ffa800"
								color="#fff"
								link="http://google.com"
							/>
						</div>
					</Slide>

				</div>
			</div>
		)
	}
}
