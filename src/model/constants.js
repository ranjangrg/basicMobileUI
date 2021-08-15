import settingsIcon from '../settingsIcon.svg';
import appClockIcon from '../appClockIcon.svg';
// import defaultAppIcon from '../defaultAppIcon.svg';

import ClockApp from '../pages/apps/01clock';
import CalendarApp from '../pages/apps/02calendar';
import PhotosApp from '../pages/apps/03photos';
import CameraApp from '../pages/apps/04camera';
import WeatherApp from '../pages/apps/05weather';
import NotesApp from '../pages/apps/06notes';
import CalculatorApp from '../pages/apps/07calculator';
import MailApp from '../pages/apps/08mail';
import SettingsApp from '../pages/apps/09settings';

const views = {
	APP_LIST: 0,
	APP_VIEW: 1
};

const defaultAppData = {
	name: "Unknown App",
	id: -1
}

const appsData = [
	{name: "Clock", id: 1, icon: appClockIcon, source: <ClockApp />},
	{name: "Calendar", id: 2, source: <CalendarApp />}, 
	{name: "Photos", id: 3, source: <PhotosApp />},
	{name: "Camera", id: 4, source: <CameraApp />},
	{name: "Weather", id: 5, source: <WeatherApp />}, 
	{name: "Notes", id: 6, source: <NotesApp />},
	{name: "Calculator", id: 7, source: <CalculatorApp />}, 
	{name: "Mail", id: 8, source: <MailApp />},
	{name: "Settings", id: 9, icon: settingsIcon, source: <SettingsApp />},
];

export { views, defaultAppData, appsData };