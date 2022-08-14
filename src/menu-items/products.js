// assets
import { BoxPlotOutlined } from '@ant-design/icons';

// icons
const icons = {
    BoxPlotOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const products = {
    id: 'Product',
    title: 'Product',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: 'products',
            icon: icons.BoxPlotOutlined,
            breadcrumbs: false
        }
    ]
};

export default products;
