export const locales = ["en", "ga"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

type TextBlock = { title: string; body: string };
type StatBlock = { label: string; title: string; body: string };
type FeatureBlock = { name: string; body: string };

type Strings = {
	metaTitle: string;
	metaDescription: string;
	brandSubtitle: string;
	navHome: string;
	navFeatures: string;
	navPrivacy: string;
	navAuthor: string;
	navCta: string;
	navDownload: string;
	heroBadges: { primary: string; secondary: string };
	heroTitle: string;
	heroBody: string;
	ctaDownload: string;
	ctaGithub: string;
	ctaAuthor: string;
	highlights: TextBlock[];
	cardEyebrow: string;
	cardPill: string;
	cardLevel: string;
	cardGoal: string;
	cardHint: string;
	cardBoost: { label: string; value: string };
	cardTimer: { label: string; value: string };
	featuresEyebrow: string;
	featuresTitle: string;
	featuresLead: string;
	features: FeatureBlock[];
	screenshotsTitle: string;
	screenshotsLead: string;
	stats: StatBlock[];
	openSource: { eyebrow: string; title: string; body: string; button: string };
	privacy: {
		eyebrow: string;
		title: string;
		lead: string;
		copyLink: string;
		directUrlLabel: string;
	};
	footerBlurb: string;
	footerLinks: { appStore: string; github: string; author: string; privacy: string };
};

const translations: Record<Locale, Strings> = {
	en: {
		metaTitle: "Potato Game | Gravity-based emoji puzzle",
		metaDescription:
			"Potato Game is a cozy, gravity-based emoji puzzle. Tilt, combine matching emojis, and merge your way to make a potato.",
		brandSubtitle: "Gravity emoji puzzle",
		navHome: "Home",
		navFeatures: "Features",
		navDownload: "Download",
		navPrivacy: "Privacy",
		navAuthor: "mickschroeder.com",
		navCta: "Get on the App Store",
		heroBadges: {
			primary: "Gravity puzzle on iOS",
			secondary: "MIT licensed & open source",
		},
		heroTitle: "Gravity-based emoji puzzles where you make potatoes.",
		heroBody:
			"Tilt your device to shift the emoji layout using gravity. When two or more matching emojis touch, tap the cluster to merge them—keep evolving until you make a potato.",
		ctaDownload: "Download on the App Store",
		ctaGithub: "View source on GitHub",
		ctaAuthor: "Made by Mick Schroeder",
		highlights: [
			{
				title: "Gravity-based puzzles",
				body: "Tilt your device to nudge emoji with real gravity and line up perfect merges.",
			},
			{
				title: "Tap to combine",
				body: "When two or more matching emojis touch, tap the cluster to fuse them into bigger ones.",
			},
			{
				title: "Collect them all",
				body: "99 emojis to unlock. Pick your favorite to use in the game.",
			},
		],
		cardEyebrow: "Gravity puzzle",
		cardPill: "Tilt & merge",
		cardLevel: "Potato-based entertainment",
		cardGoal: "Potato Game",
		cardHint: "Tilt to rearrange, then tap to fuse.",
		cardBoost: { label: "Cost", value: "Free" },
		cardTimer: { label: "Fun", value: "100%" },
		featuresEyebrow: "What is inside",
		featuresTitle: "Built for cozy, relazing play",
		featuresLead:
			"Tilt your device to steer the board, create clusters, and merge your way to make a potato.",
		features: [
			{
				name: "Gravity controls",
				body: "Tilt your device to shift the emoji layout using gravity. When two or more matching emojis touch, tap to merge.",
			},
			{
				name: "Evolve to potato",
				body: "Merge two or more of the same emojis to evolve them into bigger ones until you create a potato.",
			},
			{
				name: "Perfect wins",
				body: "No emoji left behind. Each perfect win on a level gets you closer to collect a new emoji. Can you collect them all?",
			},
			{
				name: "More levels",
				body: "1,000 free levels to play right away, plus level packs to purchase for even more challenges.",
			},
		],
		screenshotsTitle: "Screenshots",
		screenshotsLead: "A peek at the gravity puzzles, emoji merges, and warm brown UI in Potato Game.",
		stats: [
			{
				label: "Levels",
				title: "1,000 free levels",
				body: "Plenty of gravity puzzles out of the box.",
			},
			{
				label: "Collect",
				title: "99 emojis",
				body: "Unlockable set of emoji to customise your game.",
			},
			{
				label: "More to play",
				title: "Level packs",
				body: "Purchase themed packs when you want more challenges.",
			},
		],
		openSource: {
			eyebrow: "MIT licensed & open source",
			title: "See how the potatoes are made",
			body: "Peek at the code, file issues, or contribute improvements for future updates under the MIT license.",
			button: "View source on Github",
		},
		privacy: {
			eyebrow: "Privacy Policy",
			title: "Your data, respected",
			lead: "Read the full policy, including analytics, cloud saves, and contact info.",
			copyLink: "Read the Privacy Policy",
			directUrlLabel: "Direct URL",
		},
		footerBlurb: "A warm, brown-toned gravity emoji puzzle for iOS.",
		footerLinks: {
			appStore: "App Store",
			github: "GitHub",
			author: "mickschroeder.com",
			privacy: "Privacy Policy",
		},
	},
	ga: {
		metaTitle: "Potato Game | Puzal imtharraingthe emoji",
		metaDescription:
			"Is puzal emoji bunaithe ar imtharraingt é Potato Game le scáth donn te. Claon an gléas, cumaisc emoji comhoiriúnacha, agus críochnaigh le práta.",
		brandSubtitle: "Puzal emoji imtharraingthe",
		navHome: "Baile",
		navFeatures: "Gnéithe",
		navDownload: "Íoslódáil",
		navPrivacy: "Príobháideachas",
		navAuthor: "Údar",
		navCta: "Faigh ar an App Store",
		heroBadges: {
			primary: "Puzal imtharraingthe ar iOS",
			secondary: "Ceadúnas MIT & foinse oscailte",
		},
		heroTitle: "Puzail emoji imtharraingthe a chríochnaíonn i bprátaí.",
		heroBody:
			"Claon do ghléas chun an leagan amach emoji a bhogadh leis an imtharraingt. Nuair a thagann beirt nó níos mó emoji comhoiriúnacha le chéile, sconna chun iad a chumasc—lean ort go dtí go ndéanann tú práta.",
		ctaDownload: "Íoslódáil ar an App Store",
		ctaGithub: "Féach an cód ar GitHub",
		ctaAuthor: "Cruthaithe ag Mick Schroeder",
		highlights: [
			{
				title: "Puzail imtharraingthe",
				body: "Claon do ghléas chun gach emoji a bhogadh le himtharraingt fhíor agus cumaisc foirfe a chur le chéile.",
			},
			{
				title: "Tapáil le cumasc",
				body: "Nuair a bhíonn beirt emoji nó níos mó ag teagmháil, sconna an braisle chun iad a chumasc ina cinn níos mó—cumaisc emoji go tapa.",
			},
			{
				title: "Bailigh iad ar fad",
				body: "99 emoji le díghlasáil agus le forbairt ar do bhealach chuig an gcumasc prátaí deireanach.",
			},
		],
		cardEyebrow: "Puzal imtharraingthe",
		cardPill: "Claon & cumaisc",
		cardLevel: "Leibhéal 7: claonadh an úllord",
		cardGoal: "Cuir 3 liomóid le chéile",
		cardHint: "Claon ar chlé chun iad a scaoileadh le chéile, ansin tapáil chun cumasc.",
		cardBoost: { label: "Luas", value: "Drift Imtharraingthe" },
		cardTimer: { label: "Amadóir", value: "01:42 fágtha" },
		featuresEyebrow: "Cad atá istigh",
		featuresTitle: "Tógtha do spraoi cliste, tadhlach",
		featuresLead:
			"Déan bosca gainimh beag imtharraingthe de do ghuthán: stiúir an bord, cruthaigh braislí, agus cumaisc go dtí an práta.",
		features: [
			{
				name: "Cumaisc imtharraingthe",
				body: "Claon do ghléas chun an leagan amach emoji a aistriú. Nuair a bhíonn emoji comhoiriúnacha ag teagmháil, sconna chun cumasc.",
			},
			{
				name: "Forbair go práta",
				body: "Cumaisc beirt nó níos mó den emoji céanna chun leagan níos mó a chruthú go dtí go ndéanann tú práta.",
			},
			{
				name: "Bua foirfe",
				body: "Gach bua foirfe ar leibhéal tugann seans emoji nua a bhailiú. An féidir leat iad go léir a fháil?",
			},
			{
				name: "Tuilleadh leibhéalta",
				body: "1,000 leibhéal saor in aisce le seinm láithreach, móide pacáistí leibhéal le ceannach do dhúshláin bhreise.",
			},
		],
		screenshotsTitle: "Seatáin scáileáin",
		screenshotsLead: "Léargas ar na puzail imtharraingthe, cumaisc emoji, agus comhéadan donn te i Potato Game.",
		stats: [
			{
				label: "Bailiúchán",
				title: "99 emoji",
				body: "Sraith díghlasáilte de chumaisc emoji—seilg gach ceann acu.",
			},
			{
				label: "San áireamh",
				title: "1,000 leibhéal saor in aisce",
				body: "Go leor puzail imtharraingthe ón tús.",
			},
			{
				label: "Níos mó le seinm",
				title: "Pacáistí leibhéal",
				body: "Ceannaigh pacáistí téamacha nuair is mian leat níos mó dúshlán.",
			},
		],
		openSource: {
			eyebrow: "Ceadúnas MIT & foinse oscailte",
			title: "Féach conas a dhéantar na prátaí",
			body: "Breathnaigh ar an gcód, oscail saincheisteanna, nó cuir feabhsuithe leis faoin gceadúnas MIT.",
			button: "Oscail an stór",
		},
		privacy: {
			eyebrow: "Polasaí Príobháideachais",
			title: "Do shonraí, le meas",
			lead: "Léigh an polasaí iomlán—anailísíocht, sábhálacha néil, agus eolas teagmhála.",
			copyLink: "Léigh an Polasaí Príobháideachais",
			directUrlLabel: "URL díreach",
		},
		footerBlurb: "Puzal emoji donn te le himtharraingt do iOS.",
		footerLinks: {
			appStore: "App Store",
			github: "GitHub",
			author: "mickschroeder.com",
			privacy: "Polasaí Príobháideachais",
		},
	},
};

export function getStrings(locale: string): Strings {
	if (locale in translations) {
		return translations[locale as Locale];
	}
	return translations[defaultLocale];
}
