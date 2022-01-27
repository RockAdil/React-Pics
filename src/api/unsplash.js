import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID X_IxbVwVtWvkagvuOQI_iOLHAi0-OlsxTenQMPF0pxc',
	},
});
