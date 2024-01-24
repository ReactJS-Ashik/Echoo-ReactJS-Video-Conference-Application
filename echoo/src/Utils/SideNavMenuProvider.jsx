// Importing Icons

const HomeSideNav= [
    {title: 'Dashboard',      link: 'dashboard',     secondary: `Explore your Resources ✨`},
    {title: 'Chat',           link: 'chat',          secondary: "Connect to beloved 💓"},
    {title: 'Video Settings', link: 'video-settings',secondary: "Change how you look 👁️"},
    {title: 'Invite Others',  link: 'invite-others', secondary: "Increase your audience 🔊"},
    {title: 'Share',          link: 'share',         secondary: "Let us Grow"}
];

const SideNavSocialMenu=  [
        {title: 'LinkedIn', secondary: "Let's Connect 🤝" ,     link: "my-linked-in",   website: "https://www.linkedin.com/in/ashik-rai/"},
        {title: 'Github',   secondary: "My other projects 🧑‍💻",  link: "my-github",      website: "https://github.com/ashikrai"},
        {title: 'Medium',   secondary: "Read my blogs 📝",      link: "my-medium",      website: "https://medium.com/@ashikthulungrai7"},
        {title: 'Gmail',    secondary: "Write to me 📧",        link: "mailto:ashikthulungrai7@gmail.com", website: "mailto:ashikthulungrai7@gmail.com"},
        {title: 'Pinterest', secondary: "See my digital art 🎨",link: "my-pinterest",   website: "https://in.pinterest.com/ashikthulungrai7/"},
        {title: 'Website',  secondary: "My personal Website",   link: "my-website",     website: "https://ashikthulungrai7.wixsite.com/behind-pixl"},
];

const getSideNavMenu= (PageName) => {
    switch(PageName){
        case "Home":
            return HomeSideNav;
        case "Social Profiles":
            return SideNavSocialMenu;
        default:
            return null
    }
}
const getSideNavMenuByIndex= (PageName, index) => {
    switch(PageName){
        case "Home":
            return HomeSideNav[index];
        case "Social Profiles":
            return SideNavSocialMenu[index];
        default:
            return null
    }
}

export default getSideNavMenu;
export {getSideNavMenuByIndex};