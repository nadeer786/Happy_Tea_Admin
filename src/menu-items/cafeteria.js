// assets
import { ShopOutlined } from '@ant-design/icons';

// icons
const icons = {
    ShopOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const cafeteria = {
    id: 'cafeteria',
    title: 'Cafeteria',
    type: 'group',
    children: [
        {
            id: 'cafeteria',
            title: 'Cafeteria',
            type: 'item',
            url: 'cafeteria',
            icon: icons.ShopOutlined,
            breadcrumbs: false
        }
    ]
};

export default cafeteria;
