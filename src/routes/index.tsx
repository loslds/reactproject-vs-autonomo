// import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
// import  Loginoffpg  from '../pages/Loginoffpg';

// import { IRoute, RouteList } from './routelist';

// function RouteWithSubRoutes(route) {
    
//     const logged = true
  
//     function BuildRoute(p) {
//       const { component: Component, layout: Layout, privated } = p
  
//       if (!logged && privated) return <Link to="/" />
  
//       return (
//         <Layout>
//           <Component {...p} />
//         </Layout>
//       )
//     }
//     return (
//       <Route
//         path={route.path}
//         render={prop => <BuildRoute {...prop} {...route} />}
//       />
//     )
//   }
// export const RoutesApp = () => {


//    const renderRoutes = (routes: IRoute[]) => {
//      return routes.map(({ path, element: Element }) => {
//        return <Route key={`route-${path}`} path={path} element={Element} />;
//      });
//    };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={ <Loginoffpg /> } />
//         {renderRoutes(RouteList)}        
//       </Routes>
//     </BrowserRouter>
//   );
// };
