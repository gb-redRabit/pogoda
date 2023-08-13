import React from "react";
import {
	BsCloudRainFill,
	BsCloudLightningRainFill,
	BsFillSunFill,
	BsCloudSunFill,
	BsCloudSnowFill,
	BsFillCloudHaze2Fill,
	BsCloudsFill,
} from "react-icons/bs";
import { WiWindDeg } from "react-icons/wi";
//https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
const WeatherIcon = (props) => {
	let sky = props.sky;
	if (sky) {
		switch (props.sky) {
			case "Clear":
				sky = (
					<BsFillSunFill
						style={{
							display: "inline-block",
						}}
					/>
				);
				break;
			case "Thunderstorm":
				sky = (
					<BsCloudLightningRainFill
						style={{
							display: "inline-block",
						}}
					/>
				);
				break;
			case "Drizzle":
				sky = (
					<BsCloudSunFill
						style={{
							display: "inline-block",
						}}
					/>
				);
				break;
			case "Rain":
				sky = (
					<BsCloudRainFill
						style={{
							display: "inline-block",
						}}
					/>
				);
				break;
			case "Snow":
				sky = (
					<BsCloudSnowFill
						style={{
							display: "inline-block",
						}}
					/>
				);
				break;
			case "Clouds":
				sky = (
					<BsCloudsFill
						style={{
							display: "inline-block",
						}}
					/>
				);
				break;
			default:
				sky = (
					<BsFillCloudHaze2Fill
						style={{
							display: "inline-block",
						}}
					/>
				);
		}
	} else {
		sky = (
			<WiWindDeg
				size='20px'
				style={{
					transform: `rotate(${props.deg}deg)`,
					display: "inline-block",
				}}
			/>
		);
	}
	return <>{sky}</>;
};

export default WeatherIcon;
