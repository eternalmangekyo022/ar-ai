export {};

declare global {
	type Mode = {
		[P in 'url' | 'description']: string
	}
}