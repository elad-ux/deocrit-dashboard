export default {
	resetLoginStep () {
		storeValue('loginStep', 'phone');
		storeValue('loginError', '');
	},
	guardAuth () {
		if (!appsmith.store.sessionToken) {
			navigateTo('Page1', {}, 'SAME_WINDOW');
		}
	}
}