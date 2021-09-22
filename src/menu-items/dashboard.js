// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

// constant
const icons = {
    IconDashboard: IconDashboard,
    EqualizerIcon: EqualizerIcon,
    HomeWorkIcon:HomeWorkIcon,
    PersonIcon:PersonIcon,
    PeopleAltIcon:PeopleAltIcon,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'overview',
            title: 'Overview',
            type: 'item',
            url: '/dashboard/overview',
            icon: icons['EqualizerIcon'],
            breadcrumbs: false
        },
        {
            id: 'communities',
            title: 'Communities',
            type: 'collapse',
            url: '/communities',
            icon: icons['HomeWorkIcon'],
            children: [
                {
                    id: 'communities',
                    title: 'Communities Home',
                    type: 'item',
                    url: '/communities',
                    target: true,
                    breadcrumbs: false
                },
                {
                    id: 'community1',
                    title: 'Community 1',
                    type: 'item',
                    url: '/community/1',
                    target: true,
                    breadcrumbs: false
                },
                {
                    id: 'community2',
                    title: 'community 2',
                    type: 'item',
                    url: '/community/1',
                    target: true,
                    breadcrumbs: false
                }
            ],
            breadcrumbs: false
        },
        {
            id: 'campaign',
            title: 'Campaign Home',
            type: 'item',
            url: '/campaign/1',
            icon: icons['PersonIcon'],
            breadcrumbs: false
        },
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
            icon: icons['HomeWorkIcon'],
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
