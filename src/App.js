import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import AgentManagement from './pages/admin/agent/AgentManagement';
import LocalityManagement from './pages/admin/Locality/LocalityManagement';
import TemplateAdmin from './pages/admin/TemplateAdmin';
import TemplateAgent from './pages/agent/TemplateAgent';
import TemplateShipper from './pages/shipper/TemplateShipper';
import DashboardAgent from './pages/agent/Dashboard';
import DashboardAdmin from './pages/admin/dashboard/Dashboard';
import OrderManagemet from './pages/agent/OrderManagemet';
import DetailOfOrderOM from './pages/agent/DetailOfOrderOM';
import ShipperManagemet from './pages/agent/ShipperManagement';
import SimManagement from './pages/agent/SimManagement';
import HomePageShipper from './pages/shipper/HomePage';
import ListNewOrder from './pages/shipper/ListNewOrder';
import DetailOfOrderOne from './pages/shipper/DetailOfOrderOne';
import DetailOfOrder from './pages/shipper/DetailOfOrder';
import OrderShipping from './pages/shipper/OrderShipping';
import OrderShippingCF from './pages/shipper/OrderShippingCF';
import DeliveryHistory from './pages/shipper/DeliveryHistory';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<TemplateAdmin />}>
        <Route index element={<DashboardAdmin />} />
        <Route path="agentManagement" element={<AgentManagement />} />
        <Route path="localityManagement" element={<LocalityManagement />} />
      </Route>
      <Route path="/agent" element={<TemplateAgent />}>
        <Route index element={<DashboardAgent />} />
        <Route path="orderManagement" element={<OrderManagemet />} />
        <Route path="orderManagement/detailOfOrderOM" element={<DetailOfOrderOM />} />
        <Route path="shipperManagement" element={<ShipperManagemet />} />
        <Route path="simManagement" element={<SimManagement />} />
      </Route>
      <Route path="/shipper" element={<TemplateShipper />}>
        <Route index element={<HomePageShipper />} />
        <Route path="listNewOrder" element={<ListNewOrder />} />
        <Route path="listNewOrder/detailOfOrderOne" element={<DetailOfOrderOne />} />
        <Route path="orderShipping" element={<OrderShipping />} />
        <Route path="orderShipping/orderShippingCF" element={<OrderShippingCF />} />
        <Route path="deliveryHistory" element={<DeliveryHistory />} />
        <Route path="deliveryHistory/detailOfOrder" element={<DetailOfOrder />} />

      </Route>
    </Routes>
  );
}

export default App;
