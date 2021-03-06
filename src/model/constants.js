import defaultAppIcon from '../appIcons/defaultAppIcon.svg';
import appSettingsIcon from '../appIcons/appSettingsIcon.svg';
import appClockIcon from '../appIcons/appClockIcon.svg';
import appCalendarIcon from '../appIcons/appCalendarIcon.svg';
import appPhotosIcon from '../appIcons/appPhotosIcon.svg';
import appCameraIcon from '../appIcons/appCameraIcon.svg';
import appWeatherIcon from '../appIcons/appWeatherIcon.svg';
import appNotesIcon from '../appIcons/appNotesIcon.svg';
import appCalculatorIcon from '../appIcons/appCalculatorIcon.svg';
import appMailIcon from '../appIcons/appMailIcon.svg';
import appChatIcon from '../appIcons/appChatIcon.svg';

import ClockApp from '../pages/apps/01clock';
import CalendarApp from '../pages/apps/02calendar';
import PhotosApp from '../pages/apps/03photos';
import CameraApp from '../pages/apps/04camera';
import WeatherApp from '../pages/apps/05weather';
import NotesApp from '../pages/apps/06notes';
import CalculatorApp from '../pages/apps/07calculator';
import MailApp from '../pages/apps/08mail';
import SettingsApp from '../pages/apps/09settings';
import ChatApp from '../pages/apps/10chat';
import DefaultApp from '../pages/apps/00default';

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
	{name: "Calendar", id: 2, icon: appCalendarIcon,source: <CalendarApp />}, 
	{name: "Photos", id: 3, icon: appPhotosIcon, source: <PhotosApp />},
	{name: "Camera", id: 4, icon: appCameraIcon, source: <CameraApp />},
	{name: "Weather", id: 5, icon: appWeatherIcon, source: <WeatherApp />}, 
	{name: "Notes", id: 6, icon: appNotesIcon, source: <NotesApp />},
	{name: "Calculator", id: 7, icon: appCalculatorIcon, source: <CalculatorApp />}, 
	{name: "Mail", id: 8, icon: appMailIcon, source: <MailApp />},
	{name: "Settings", id: 9, icon: appSettingsIcon, source: <SettingsApp />},
	{name: "Chat", id: 10, icon: appChatIcon, source: <ChatApp />},
	{name: "Unknown", id: -1, icon: defaultAppIcon ,source: <DefaultApp />},
];

const themes = {
	"LIGHT": 0,
	"DARK": 1,
	"MIXED": 2
};

const langs = {
	"EN": 0,
	"FR": 1,
	"NL": 2,
	"DE": 3,
	"IT": 4
};

export { views, defaultAppData, appsData, themes, langs };