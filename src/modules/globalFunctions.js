import { appsData, defaultAppData, themes, langs } from '../model/constants';

const getThemeClass = (theme_id) => {
	switch (theme_id) {
		case themes.LIGHT:
			return "app-theme-light";
		case themes.DARK:
			return "app-theme-dark";
		case themes.MIXED:
			return "app-theme-mixed";
		default:
			return "app-theme-light";
	}
};

const getLang = (lang_id) => {
	switch (lang_id) {
		case langs.EN:
			return "EN";
		case langs.FR:
			return "FR";
		case langs.NL:
			return "NL";
		case langs.DE:
			return "DE";
		case langs.IT:
			return "IT";
		default:
			return "EN"
	}
};

const getAppDetailsFromId = (app_id = -1) => {
	let app_detail = defaultAppData;
	for ( const curr_app_detail of appsData ) {
		if ( curr_app_detail.id === app_id ) {
			app_detail = curr_app_detail;
			break;
		}
	}
	return app_detail;
};

export { getThemeClass, getLang, getAppDetailsFromId };