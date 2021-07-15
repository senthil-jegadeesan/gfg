import React from 'react';
import './themes/styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Home from "./pages/Home";
import ProductSelector from "./pages/ProductSelector";
import Plp from "./pages/Plp";
import Pdp from "./pages/Pdp";
import Cart from "./pages/Cart";
import Color from "./pages/Colorvariant";
import Tyre from "./pages/Tyrevariant";
import Implements from "./pages/Implementsvariant";

const router = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/step1" component={() => <ProductSelector />} />
                    <Route exact path="/step2" component={() => <ProductSelector />} />
                    <Route exact path="/step3" component={() => <ProductSelector />} />
                    <Route exact path="/step4" component={() => <ProductSelector />} />
                    <Route exact path="/plp" component={() => <Plp />} />
                    <Route exact path="/pdp" component={() => <Pdp />} />
                    <Route exact path="/cart" component={() => <Cart />} />
                    <Route exact path="/pdp/variant-color" component={() => <Color />} />
                    <Route exact path="/pdp/variant-tyre" component={() => <Tyre />} />
                    <Route exact path="/pdp/variant-implements" component={() => <Implements />} />
                </Switch>
            </div>
        </Router>

    );
}
export default router;