import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import './index.css';

// Pages
import App from './App';
import AboutPage from './pages/about';
import GalleryPage from './pages/gallery';
import ContactsPage from './pages/contacts';
import ITTechnicalSupportPage from './pages/it-technical-support';
import PCRepairServicesPage from './pages/pc-repair-services';
import BusinessCentrePage from './pages/business-centre';
import CACRegistrationsPage from './pages/cac-registrations';
import PointOfSaleSystemPage from './pages/point-of-sale-system';
import VirtualAssistancePage from './pages/virtual-assistance';
import ComputerTrainingPage from './pages/computer-training';
import WebsiteDesignPage from './pages/website-design';
import GraphicDesignPage from './pages/graphic-design';
import LaptopSalesPage from './pages/laptop-sales';
import PhoneAccessoriesPage from './pages/phone-accessories';
import PCAccessoriesPage from './pages/pc-accessories';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const routes = [
  indexRoute,
  createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/gallery', component: GalleryPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/contacts', component: ContactsPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/it-technical-support', component: ITTechnicalSupportPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/pc-repair-services', component: PCRepairServicesPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/business-centre', component: BusinessCentrePage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/cac-registrations', component: CACRegistrationsPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/point-of-sale-system', component: PointOfSaleSystemPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/virtual-assistance', component: VirtualAssistancePage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/computer-training', component: ComputerTrainingPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/website-design', component: WebsiteDesignPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/graphic-design', component: GraphicDesignPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/laptop-sales', component: LaptopSalesPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/phone-accessories', component: PhoneAccessoriesPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/pc-accessories', component: PCAccessoriesPage }),
];

const routeTree = rootRoute.addChildren(routes);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
