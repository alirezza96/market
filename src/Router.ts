import { useRoutes } from "react-router-dom";
import routes from "routes";


export default function AppRouter() {
    const router  = useRoutes(routes);
    return router
}


