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
			'http://sales/b',
			'http://sales/c',
			'http://sales/d'
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
