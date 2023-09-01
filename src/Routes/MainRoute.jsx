import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Signup from '../Components/Auth/Signup'
import ResponsiveDrawer from '../Components/Dashboard/Dashboard'
import { AddProd, AddVari, Custo, Custocare, DashHome, Deli, EditProd, EditVari, Invo, Mark, Multi, Pack, Prod, Repo, Sale, Ship,TabChanges,Vendo, View, ViewProd } from '../Components/Route Page/Main'
import PrivateRoute from './PrivateRoute';
import Signin from '../Components/Auth/Signin'




const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={<ResponsiveDrawer/>}/>
            <Route path='/ad-dashboard' element={<DashHome/>}/>
            <Route path='/products-items' element={<Prod/>} />
            <Route path='/customers' element={<Custo/>} />
            <Route path='/shipping' element={<Ship/>} />
            <Route path='/multichanel' element={<Multi/>} />
            <Route path='/marketing' element={<Mark/>} />
            <Route path='/reports' element={<Repo/>} />
            <Route path='/vendor' element={<Vendo/>} />
            <Route path='/sales-order' element={<Sale/>} />
            <Route path='/packages' element={<Pack/>} />
            <Route path='/delivery' element={<Deli/>} />
            <Route path='/customer-care' element={<Custocare/>} />
            <Route path='/invoices' element={<Invo/>} />
            {/* <Route path='/product-view/:id' element={<View/>} /> */}
            <Route path='/product/edit/:id' element={<EditProd/>} />
            <Route path='/product/add-variant/:id' element={<AddVari/>} />
            <Route path='/product/edit-variant/:id' element={<EditVari/>} />
            <Route path='/add-product' element={<AddProd/>} />
            <Route path='/tab-change' element={<TabChanges/>} />
            <Route path='/view-product/:id' element={<ViewProd/>} />


            

            {/* <Route path='/add-product' element={<AddProd/>} /> */}
        </Routes>
    </div>
  )
}

export default MainRoute