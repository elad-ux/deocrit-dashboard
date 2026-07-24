export default {
	async load () {
		for (let i = 0; i < 15; i++) {
			if (appsmith.store.sessionToken) {
				return GetContainers.run();
			}
			await new Promise(r => setTimeout(r, 200));
		}
		navigateTo('Page1');
	}
}