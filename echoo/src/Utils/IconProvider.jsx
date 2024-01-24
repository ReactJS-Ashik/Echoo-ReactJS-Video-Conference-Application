import { GithubFilled, GoogleCircleFilled, LinkedinFilled, MediumOutlined } from '@ant-design/icons';
import HomeIcon from '@mui/icons-material/Home';
import { ChatRounded, GroupAddRounded, ShareRounded, SpaceDashboardRounded, VideoSettingsRounded } from '@mui/icons-material';
import { DescriptionRounded, Pinterest } from '@mui/icons-material';
import BehindPixlLogo from '../Resources/image/Behind_PXL_Logo_SVG_Data'

const getIcon= (title, iconColor) => {
    switch(title){
        case "LinkedIn":
            return <LinkedinFilled/>;
        case "Github":
            return <GithubFilled />;
        case "Medium":
            return <MediumOutlined />;
        case "Gmail":
            return <GoogleCircleFilled />;
        case "Pinterest":
            return <Pinterest />;
        case "Website":
            return iconColor ? <BehindPixlLogo iconColor={iconColor} sx={{ fontSize: '12px' }}/> : <BehindPixlLogo sx={{ fontSize: '12px' }}/>;
        case "Home":
            return <HomeIcon fontSize="small" />;
        case "Blog":
            return <DescriptionRounded fontSize="small"/>;
        case 'Dashboard':
            return <SpaceDashboardRounded fontSize={'small'} />;
        case 'Chat':
            return <ChatRounded fontSize='small' />;
        case 'Video Settings':
            return <VideoSettingsRounded  fontSize='small' />;
        case 'Invite Others':
            return <GroupAddRounded fontSize='small' />;
        case 'Share':
            return <ShareRounded fontSize='small' />
        default:
            return null;
    }
}

export default getIcon;