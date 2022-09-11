/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/products',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['fakestoreapi.com'],
	},

};

module.exports = nextConfig;