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
                </Switch>
            </div>
        </Router>

    );
}
export default router;