// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Collin',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night,',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '05eec1dbeacd0c51e280f1078d9ecb7a', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '40.826942',
	defaultLongitude: '-74.003982',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Mail',
			icon: 'mail-plus',
			link: 'https://mail.google.com/mail/u/0/#all',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail-warning',
			link: 'https://mail.google.com/mail/u/1/#all',
		},
		{
			id: '3',
			name: 'Calendar',
			icon: 'calendar-days',
			link: 'https://calendar.google.com/calendar/u/0/r',
		},
		{
			id: '4',
			name: 'Todo',
			icon: 'list-todo',
			link: 'https://ticktick.com/webapp/#q/today/tasks',
		},
		{
			id: '5',
			name: 'Mail',
			icon: 'mail-x',
			link: 'https://mail.google.com/mail/u/2/#all',
		},
		{
			id: '6',
			name: 'Notes',
			icon: 'notepad-text',
			link: 'https://www.icloud.com/notes/folder/UHJpdmF0ZTo6Tm90ZXM6OmN1cnJlbnRVc2VyOjpEZWZhdWx0Rm9sZGVyLUNsb3VkS2l0',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Videos',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'Streaming',
			icon: 'tv',
			link: 'https://www.imdb.com/user/ur209914350/watchlist/?ref_=hm_nv_urwls_all',
		},
		{
			id: '3',
			name: 'Library',
			icon: 'square-library',
			link: 'https://archive.org/details/@dominicanodominator/collections',
		},
		{
			id: '4',
			name: 'Comics',
			icon: 'newspaper',
			link: 'https://readcomiconline.li/',
		},
		{
			id: '5',
			name: 'Anime',
			icon: 'badge-japanese-yen',
			link: 'https://hianime.to/home',
		},
		{
			id: '6',
			name: 'Manga',
			icon: 'square-kanban',
			link: 'https://weebcentral.com/users/me/subscriptions',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'sofa',
			id: '1',
			links: [
				{
					name: 'Videos',
					link: '---',
				},
				{
					name: 'Streaming',
					link: '---',
				},
				{
					name: 'Anime',
					link: '---',
				},
				{
					name: 'blank',
					link: '---',
				},
			],
		},
		{
			icon: 'square-library',
			id: '2',
			links: [
				{
					name: 'Library',
					link: '---',
				},
				{
					name: 'Comics',
					link: '---',
				},
				{
					name: 'Manga',
					link: '---',
				},
				{
					name: 'blank',
					link: '---',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
