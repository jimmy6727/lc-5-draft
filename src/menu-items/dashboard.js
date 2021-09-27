// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommunitiesService from '../utils/CommunitiesService';
import SettingsIcon from '@material-ui/icons/Settings';
import userGlobals from '../utils/userGlobals';

// constant
const icons = {
    IconDashboard: IconDashboard,
    EqualizerIcon: EqualizerIcon,
    HomeWorkIcon:HomeWorkIcon,
    SettingsIcon:SettingsIcon,
    PersonIcon:PersonIcon,
    PeopleAltIcon:PeopleAltIcon,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//
const community_sidemenu_choices = []
CommunitiesService.forAccount(userGlobals.account_sfid)
.then(res => {
    {res.data.data.map((community) => {
        console.log(community.address__c)
        community_sidemenu_choices.push({
            id: 'community-'+community.sfid,
            title: community.name,
            type: 'item',
            url: '/community/'+community.sfid,
            target: true,
            breadcrumbs: false
        })
    })}

})

export const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'overview',
            title: 'Overview',
            type: 'item',
            url: '/overview',
            icon: icons['EqualizerIcon'],
            breadcrumbs: false
        },
        {
            id: 'communities',
            title: 'Communities',
            type: 'collapse',
            url: '/communities',
            icon: icons['HomeWorkIcon'],
            children: community_sidemenu_choices,
            breadcrumbs: false
        },
        // {
        //     id: 'campaign',
        //     title: 'Campaign Home',
        //     type: 'item',
        //     url: '/campaign/1',
        //     icon: icons['PersonIcon'],
        //     breadcrumbs: false
        // },
        {
            id: 'residents',
            title: 'Residents',
            type: 'item',
            url: '/residents',
            icon: icons['PersonIcon'],
            breadcrumbs: false
        },
        {
            id: 'team',
            title: 'Team',
            type: 'item',
            url: '/team',
            icon: icons['PeopleAltIcon'],
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'collapse',
            url: '/settings',
            icon: icons['SettingsIcon'],
            children: [
                {
                    id: 'general',
                    title: 'General',
                    type: 'item',
                    url: '/settings/general',
                    target: true,
                    breadcrumbs: false
                },
                {
                    id: 'statements',
                    title: 'Statements',
                    type: 'item',
                    url: '/settings/statements',
                    target: true,
                    breadcrumbs: false
                },
                {
                    id: 'PaymentMethods',
                    title: 'Payment Methods',
                    type: 'item',
                    url: '/settings/payment_methods',
                    target: true,
                    breadcrumbs: false
                }
            ],
            breadcrumbs: false
        },
    ]
};
