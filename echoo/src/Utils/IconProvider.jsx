import { GithubFilled, GoogleCircleFilled, LinkedinFilled, MediumOutlined } from '@ant-design/icons';
import HomeIcon from '@mui/icons-material/Home';
import { DescriptionRounded, Pinterest } from '@mui/icons-material';
import BehindPixlLogo from '../Resources/image/Behind_PXL_Logo_SVG_Data'

const getIcon= (title) => {
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
            return <BehindPixlLogo />;
        case "Home":
            return <HomeIcon fontSize="small" />;
        case "Blog":
            return <DescriptionRounded fontSize="small"/>;
        default:
            return null;
    }
}

export default getIcon;