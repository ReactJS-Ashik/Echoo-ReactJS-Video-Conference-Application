// Importing Icons
import { ChatRounded, GroupAddRounded, ShareRounded, SpaceDashboardRounded, VideoSettingsRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';



const GetSideNavHomeMenu= (userProfile) => {
    return ([
        {title: 'Dashboard',      secondary: `Welcome ${userProfile.username} 🙏` , icon: <SpaceDashboardRounded fontSize={'small'} />},
        {title: 'Chat',           secondary: "Connect to beloved 💓" ,              icon: <ChatRounded fontSize='small' />},
        {title: 'Video Settings', secondary: "Change how you look 👁️",              icon: <VideoSettingsRounded  fontSize='small' />},
        {title: 'Invite Others',  secondary: "Increase your audience 🔊",           icon: <GroupAddRounded fontSize='small' />},
        {title: 'Share',          secondary: "Let us Grow",                         icon: <ShareRounded fontSize='small' />}
    ])
};

export const SideNavSocialMenu=  [
        {title: 'LinkedIn', secondary: "Let's Connect 🤝" ,     link: "https://www.linkedin.com/in/ashik-rai/"},
        {title: 'Github',   secondary: "My other projects 🧑‍💻",  link: "https://github.com/ashikrai"},
        {title: 'Medium',   secondary: "Read my blogs 📝",      link: "https://medium.com/@ashikthulungrai7"},
        {title: 'Gmail',    secondary: "Write to me 📧",        link: "mailto:ashikthulungrai7@gmail.com"},
        {title: 'Pinterest', secondary: "See my digital art 🎨",link: "https://in.pinterest.com/ashikthulungrai7/"},
        {title: 'Website',  secondary: "My personal Website",   link: "https://ashikthulungrai7.wixsite.com/behind-pixl"},
      ];

const getSideNavMenu= (PageName, userProfile) => {
    switch(PageName){
        case "Home":
            return GetSideNavHomeMenu(userProfile);
        case "Social Profiles":
            return SideNavSocialMenu;
        default:
            return null
    }
}

export default getSideNavMenu;