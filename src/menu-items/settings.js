// assets
import { BoxPlotOutlined } from '@ant-design/icons';

// icons
const icons = {
    BoxPlotOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const settings = {
    id: 'settings',
    title: 'Settings',
    type: 'group',
    children: [
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: 'settings',
            icon: icons.BoxPlotOutlined,
            breadcrumbs: false
        }
    ]
};

export default settings;
