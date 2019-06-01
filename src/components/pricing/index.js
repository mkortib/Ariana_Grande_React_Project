import React, { Component } from 'react'
import Button from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

export default class Pricing extends Component {

	state = {
		prices: [100, 150, 200],
		positions: ['Balcony', 'Medium', 'Star'],
		desc: [
			'Lorem ipsum dolor sit amet. Nisi nemo eos ducimus numquam amet accusamus quidem, libero architecto!',
			'Voluptas ipsa nulla voluptates laborum assumenda sunt ea, ad nemo hic labore iste. Magni autem eos sit voluptate quam architecto.',
			'Dignissimos officia aut nam incidunt minus maxime officiis id numquam. Neque voluptatibus doloribus quae, harum nihil sequi!'
		],
		linkto: [
			'https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Ariana-Grande-Tickets?AffiliateID=49&adposition=1t1&PCID=PSROWGOOCONARIAN70D59F57A&AdID=344304829388&MetroRegionID=&psc=%2c&ps=%2c&ps_p=0&ps_c=1592575147&ps_ag=60472507139&ps_tg=kwd-296667379833&ps_ad=344304829388&ps_adp=1t1&ps_fi=%2c&ps_li=%2c&ps_lp=21580&ps_n=g&ps_d=c&gclid=Cj0KCQjwxMjnBRCtARIsAGwWnBP-KYXNHnhCPPkHkZ6gmkTq4qJFzJlaAuontwu1FXRFPFeKM5PBfFcaAiOqEALw_wcB',
			'https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Ariana-Grande-Tickets?AffiliateID=49&adposition=1t1&PCID=PSROWGOOCONARIAN70D59F57A&AdID=344304829388&MetroRegionID=&psc=%2c&ps=%2c&ps_p=0&ps_c=1592575147&ps_ag=60472507139&ps_tg=kwd-296667379833&ps_ad=344304829388&ps_adp=1t1&ps_fi=%2c&ps_li=%2c&ps_lp=21580&ps_n=g&ps_d=c&gclid=Cj0KCQjwxMjnBRCtARIsAGwWnBP-KYXNHnhCPPkHkZ6gmkTq4qJFzJlaAuontwu1FXRFPFeKM5PBfFcaAiOqEALw_wcB',
			'https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Ariana-Grande-Tickets?AffiliateID=49&adposition=1t1&PCID=PSROWGOOCONARIAN70D59F57A&AdID=344304829388&MetroRegionID=&psc=%2c&ps=%2c&ps_p=0&ps_c=1592575147&ps_ag=60472507139&ps_tg=kwd-296667379833&ps_ad=344304829388&ps_adp=1t1&ps_fi=%2c&ps_li=%2c&ps_lp=21580&ps_n=g&ps_d=c&gclid=Cj0KCQjwxMjnBRCtARIsAGwWnBP-KYXNHnhCPPkHkZ6gmkTq4qJFzJlaAuontwu1FXRFPFeKM5PBfFcaAiOqEALw_wcB'
		],
		delay: [500, 0, 500]
	}

	showBoxes = () => (
		this.state.prices.map((box, i) => (
			<Zoom key={i} delay={this.state.delay[i]}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">

						<div className="pricing_title">
							<span>${this.state.prices[i]}</span>
							<span>{this.state.positions[i]}</span>
						</div>
						<div className="pricing_description">{this.state.desc[i]}</div>
						<div className="pricing_buttons">
							<Button 
								text="Purchase"
								bck="#ffa800"
								color="#fff"
								link={this.state.linkto[i]}
							/>
						</div>

					</div>
				</div>
			</Zoom>
		))
	)

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>

					<div className="pricing_wrapper">
						{this.showBoxes()}
					</div>

				</div>
			</div>
		)
	}
}
