import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "西游却东行",
	subtitle: "记录、梳理、输出",
	lang: "zh_CN",
	themeColor: {
		hue: 235,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "/images/banner.jpg",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{
			src: "/favicon.ico",
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/shushengritian",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/avatar.jpg",
	name: "FengH",
	bio: "西游却东行 — 程序与设计，生活和工作",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/shushengritian",
		},
		{
			name: "知乎",
			icon: "fa6-brands:zhihu",
			url: "https://www.zhihu.com/people/xiyouquedongxing",
		},
		{
			name: "微博",
			icon: "fa6-brands:weibo",
			url: "https://weibo.com/xiyouquedongxing",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
