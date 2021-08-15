import settingsIcon from '../settingsIcon.svg';
import appClockIcon from '../appClockIcon.svg';
// import defaultAppIcon from '../defaultAppIcon.svg';

const views = {
	APP_LIST: 0,
	APP_VIEW: 1
};

const defaultAppData = {
	name: "Unknown App",
	id: -1
}

const appsData = [
	{name: "Clock", id: 1, icon: appClockIcon},
	{name: "Calendar", id: 2}, {name: "Photos", id: 3},
	{name: "Camera", id: 4},
	{name: "Weather", id: 5}, {name: "Notes", id: 6},
	{name: "Calculator", id: 7}, {name: "Mail", id: 8},
	{name: "Settings", id: 9, icon: settingsIcon},
];


export { views, defaultAppData, appsData };