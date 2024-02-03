import React from 'react'
import App from '../App'

// Routing Imports
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// My Components
import HomeComponent from '../Components/Home Components/HomeComponent'
import SocialComponent from '../Components/Social Components/SocialComponent'
import ChatComponent from '../Components/Home Components/ChatComponent'
import VideoSettingComponent from '../Components/Home Components/VideoSettingComponent'
import InviteOthersComponent from '../Components/Home Components/InviteOthersComponent'
import ShareComponent from '../Components/Home Components/ShareComponent'
import DashboardComponent from '../Components/Home Components/DashboardComponent'
import GithubComponent from '../Components/Social Components/GithubComponent'
import MediumComponent from '../Components/Social Components/MediumComponent'
import PinterestComponent from '../Components/Social Components/PinterestComponent'
import LinkedInComponent from '../Components/Social Components/LinkedInComponent'

const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<HomeComponent />} />
            <Route path="home" element={<HomeComponent />}>
                <Route path="c/:componentId/dashboard" element={<DashboardComponent />} />
                <Route path="c/:componentId/chat" element={<ChatComponent />} />
                <Route path="c/:componentId/video-settings" element={<VideoSettingComponent />} />
                <Route path="c/:componentId/invite-others" element={<InviteOthersComponent />} />
                <Route path="c/:componentId/share" element={<ShareComponent />} />
            </Route>
            <Route path="social" element={<SocialComponent />}>
                <Route path="s/:componentId/my-linked-in" element={<LinkedInComponent />}/>
                <Route path="s/:componentId/my-github" element={<GithubComponent />}/>
                <Route path="s/:componentId/my-medium" element={<MediumComponent />}/>
                <Route path="s/:componentId/my-pinterest" element={<PinterestComponent />}/>
            </Route>
            <Route path="blog" element={<DashboardComponent />}/>
            <Route path="about" element={<DashboardComponent />}/>
            <Route path="*" element={<div>Not a valid URL.</div>}/>
        </Route>
    )
);

export default router;
