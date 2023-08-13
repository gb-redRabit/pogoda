import React from "react";
import WeatherIcon from "./WeatherIcon";
// https://react-icons.github.io/react-icons
// tailwind
// daisyui
const Result = (props) => {
	const {
		date,
		city,
		sunrise,
		sunset,
		temp,
		pressure,
		wind,
		lat,
		lon,
		err,
		img,
		alt,
		sky,
	} = props.weather;

	let content = null;
	if (!err && city) {
		const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
		const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
		let link = `https://www.google.com/search?q=${lat}%C2%B0+${lon}%C2%B0`;
		content = (
			<>
				<div
					className='card bg-base-100 shadow-xl image-full text-right'
					style={{ height: "500px", width: "500px" }}
				>
					{img ? (
						<figure>
							<img src={img} alt={alt} />
						</figure>
					) : null}

					<div className='card-body'>
						<h2 className='card-title'>
							<em style={{ textTransform: "uppercase" }}>
								{city}
							</em>{" "}
							<a
								className='link link-hover'
								href={link}
								target='_blank'
								rel='noreferrer'
							>
								{lat}° {lon}°
							</a>
						</h2>
						<h3>Czas lokalny: {date}</h3>
						<p>
							Temperatura: {temp}°C <WeatherIcon sky={sky.main} />
						</p>

						<h3>Wschód / Zachód słońca do czasu lokalnego:</h3>
						<h3>
							{sunriseTime} / {sunsetTime}
						</h3>
						<h3>Ciśnienie: {pressure} hPa</h3>
						<h3>
							Prędkość wiatru: {wind.speed}km/h{" "}
							<WeatherIcon deg={wind.deg} />
						</h3>
					</div>
				</div>
			</>
		);
	}
	return <div>{err ? `Nie mamy w bazie ${city}` : content}</div>;
};

export default Result;
