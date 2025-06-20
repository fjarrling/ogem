import {RouteObject} from "react-router-dom";
// import RootLayout from "@/components/RootLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Products from "@/pages/Products/Products";
import Cacao from "@/pages/Cacao/Cacao";
import Energy from "@/pages/Energy/Energy";
import Commodities from "@/pages/Commodities/Commodities";
import Food from "@/pages/Food/Food";
import Construction from "@/pages/Construction/Construction";
import Production from "@/pages/Production/Production";
import ProductionItem1 from "@/pages/Production/ProductionItem1/ProductionItem1";
import ProductionItem2 from "@/pages/Production/ProductionItem2/ProductionItem2";
import ProductionItem3 from "@/pages/Production/ProductionItem3/ProductionItem3";
import Services from "@/pages/Services/Services";
import Policy from "@/pages/Policy/Policy";
import NotFound from "@/pages/NotFound/NotFound";
import RootLayout from "@/Layouts/RootLayout/RootLayout.tsx";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {index: true, Component: Home},
      {path: "about", Component: About},
      {path: "contact", Component: Contact},
      {path: "services", Component: Services},
      {path: "policy", Component: Policy},
      {path: "products", Component: Products},
      {path: "products/cacao-beans", Component: Cacao},
      {path: "products/energy", Component: Energy},
      {path: "products/commodities", Component: Commodities},
      {path: "products/food-and-agriculture", Component: Food},
      {path: "products/construction-equipment", Component: Construction},
      {path: "products/production-equipment", Component: Production},
      {path: "products/production-equipment/1", Component: ProductionItem1},
      {path: "products/production-equipment/2", Component: ProductionItem2},
      {path: "products/production-equipment/3", Component: ProductionItem3},
      {path: "*", Component: NotFound},
    ],
  },
];

export default ROUTES;
