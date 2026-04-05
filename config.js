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
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '05eec1dbeacd0c51e280f1078d9ecb7a', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
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
			name: 'Notes',
			icon: 'notepad-text',
			link: 'https://www.icloud.com/notes/folder/UHJpdmF0ZTo6Tm90ZXM6OmN1cnJlbnRVc2VyOjpEZWZhdWx0Rm9sZGVyLUNsb3VkS2l0',
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
			name: 'GitHub',
			icon: 'square-slash',
			link: 'https://github.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '2',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '3',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '4',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '5',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '6',
			name: '',
			icon: '',
			link: '',
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
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Real-Debrid',
					link: 'https://real-debrid.com/downloader',
				},
				{
					name: 'Stream Sites',
					link: 'https://fmhy.net/video#streaming-sites',
				},
				{
					name: 'IMDb',
					link: 'https://www.imdb.com/user/ur209914350/watchlist/?ref_=hm_nv_urwls_all',
				},
			],
		},
		{
			icon: 'square-library',
			id: '2',
			links: [
				{
					name: 'Library',
					link: 'https://archive.org/details/@dominicanodominator/collections',
				},
				{
					name: 'Comics',
					link: 'https://readcomiconline.li/',
				},
				{
					name: 'Manga',
					link: 'https://weebcentral.com/users/me/subscriptions',
				},
				{
					name: 'AniList',
					link: 'https://anilist.co/user/calystic/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: '',
			id: '1',
			links: [
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
			],
		},
		{
			icon: '',
			id: '2',
			links: [
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
			],
		},
	],
};
