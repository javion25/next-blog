/**
 * Created by h9zhou on 2017/5/7.
 */
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
	webpack: (config, { dev }) => {
		// Perform customizations to config

		// Important: return the modified config
		return config
	}
}
