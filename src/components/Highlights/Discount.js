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
								link="https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Ariana-Grande-Tickets?AffiliateID=49&adposition=1t1&PCID=PSROWGOOCONARIAN70D59F57A&AdID=344304829388&MetroRegionID=&psc=%2c&ps=%2c&ps_p=0&ps_c=1592575147&ps_ag=60472507139&ps_tg=kwd-296667379833&ps_ad=344304829388&ps_adp=1t1&ps_fi=%2c&ps_li=%2c&ps_lp=21580&ps_n=g&ps_d=c&gclid=Cj0KCQjwxMjnBRCtARIsAGwWnBP-KYXNHnhCPPkHkZ6gmkTq4qJFzJlaAuontwu1FXRFPFeKM5PBfFcaAiOqEALw_wcB"
							/>
						</div>
					</Slide>

				</div>
			</div>
		)
	}
}
