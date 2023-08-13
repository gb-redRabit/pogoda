import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const ApiKey = `d2a38c9eb5a4e662241fbd654c58cc23`;

class App extends Component {
	state = {
		value: ``,
		date: ``,
		city: ``,
		sunrise: ``,
		sunset: ``,
		temp: ``,
		pressure: ``,
		wind: ``,
		lat: ``,
		lon: ``,
		sky: ``,
		err: false,
		img: null,
		alt: null,
	};

	handleInputChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};
	getImg = (city) => {
		fetch(
			`https://pixabay.com/api/?key=31328995-12f242da755fac396b6b3c55c&q=${city}`
		)
			.then((response) => response)
			.then((response) => response.json())
			.then((data) => {
				if (data.total !== 0 && data.total > 1) {
					this.setState((state) => ({
						img: data.hits[1].webformatURL,
						alt: data.hits[1].tags,
					}));
				} else if (data.total === 1) {
					this.setState((state) => ({
						img: data.hits[0].webformatURL,
						alt: data.hits[0].tags,
					}));
				} else {
					this.setState((state) => ({
						img: `https://pixabay.com/get/g703aa444f51c701e07596d7ec6b285f14a3cf68ea62aa63385ada6b55856eb97c07e0e5b0981effecccd24f23e266f621aa8e4db3181f1f33025c7a64ab958ed_640.jpg`,
						alt: "city",
					}));
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	componentDidUpdate(prevProps, prevState) {
		if (this.state.value.length === 0) return;
		if (prevState.value !== this.state.value) {
			const Api = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${ApiKey}&units=metric`;
			fetch(Api)
				.then((response) => {
					if (response.ok) {
						return response;
					}
					throw Error(`Nie udało się`);
				})
				.then((response) => response.json())
				.then((data) => {
					const time = new Date().toLocaleTimeString();
					this.setState((state) => ({
						sky: data.weather[0],
						city: state.value,
						date: time,
						sunrise: data.sys.sunrise,
						sunset: data.sys.sunset,
						temp: data.main.temp,
						pressure: data.main.pressure,
						wind: data.wind,
						lat: data.coord.lat,
						lon: data.coord.lon,
						err: false,
						img: this.getImg(state.value),
					}));
				})
				.catch((err) => {
					this.setState((state) => ({
						err: true,
						city: state.value,
					}));
					console.log(err);
				});
		}
	}

	render() {
		return (
			<div className='flex flex-col items-center'>
				<Form
					value={this.state.value}
					change={this.handleInputChange}
				/>
				<Result weather={this.state} />
			</div>
		);
	}
}

export default App;
