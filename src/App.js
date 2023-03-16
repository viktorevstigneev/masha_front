import './App.css';
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/common/Header';

// const SignInPage = lazy(() => import('./components/pages/SignIn'));
// const SignUpPage = lazy(() => import('./components/pages/Signup'));
const MainPage = lazy(() => import('./components/pages/MainPage'));
const ProjectPage = lazy(() => import('./components/pages/ProjectPage'));

const HousesPage = lazy(() => import('./components/pages/HousesPage'));
const ApartmentsPage = lazy(() => import('./components/pages/ApartmentsPage'));
const KitchensPage = lazy(() => import('./components/pages/KitchensPage'));
const BathroomPage = lazy(() => import('./components/pages/BathroomPage'));

// houses ---------------
const RuralVillaPage = lazy(() => import('./components/pages/RuralVillaPage'));
const BarnHousePage = lazy(() => import('./components/pages/BarnHousePage'));
const BeachHousePage = lazy(() => import('./components/pages/BeachHousePage'));
const GreenHousePage = lazy(() => import('./components/pages/GreenHousePage'));


// apartments ---------------
const CozyApartPage = lazy(() => import('./components/pages/CozyApartPage'));
const GreenCornerApartPage = lazy(() => import('./components/pages/GreenCornerApartPage'));
const ModerApartPage = lazy(() => import('./components/pages/ModerApartPage'));
const BoldDecitionApartPage = lazy(() => import('./components/pages/BoldDecitionApartPage'));

// kitchens ---------------
const BrightKitchenPage = lazy(() => import('./components/pages/BrightKitchenPage'));
const HumbleKitchenPage = lazy(() => import('./components/pages/HumbleKitchenPage'));
const ElegantKitchenPage = lazy(() => import('./components/pages/ElegantKitchenPage'));
const GreenKitchenPage = lazy(() => import('./components/pages/GreenKitchenPage'));

// bathrooms ---------------
const VintageBathroomPage = lazy(() => import('./components/pages/VintageBathroomPage'));
const ModernBathroomPage = lazy(() => import('./components/pages/ModernBathroomPage'));
const GrungeBathroomPage = lazy(() => import('./components/pages/GrungeBathroomPage'));
const BrightBathroomPage = lazy(() => import('./components/pages/BrightBathroomPage'));



// const ClothesPage = lazy(() => import('./components/pages/ClothesPage'));
// const ProfilePage = lazy(() => import('./components/pages/ProfilePage'));
// const AdminPage = lazy(() => import('./components/pages/AdminPanel'));
// const CartPage = lazy(() => import('./components/pages/CartPage'));
// const ContactPage = lazy(() => import('./components/pages/ContactPage'));

function App() {
	
	return (
		<BrowserRouter>
			<Header />
			<Suspense fallback={'load'}>
				<Routes>
					{/* <Route path="/" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} /> */}
					<Route path="/" element={<MainPage />} />
					<Route path="/projects" element={<ProjectPage />} />

					<Route path="/houses" element={<HousesPage />} />
					<Route path="/apartments" element={<ApartmentsPage />} />
					<Route path="/kitchens" element={<KitchensPage />} />
					<Route path="/bathrooms" element={<BathroomPage />} />

					{/* houses --------- */}
					<Route path="/ruralvilla" element={<RuralVillaPage />} />
					<Route path="/barnhouse" element={<BarnHousePage />} />
					<Route path="/beachhouse" element={<BeachHousePage />} />
					<Route path="/greenhouse" element={<GreenHousePage />} />

					{/* apartments --------- */}
					<Route path="/cozyapart" element={<CozyApartPage />} />
					<Route path="/cornerapart" element={<GreenCornerApartPage />} />
					<Route path="/moderapart" element={<ModerApartPage />} />
					<Route path="/boldapart" element={<BoldDecitionApartPage />} />

					{/* kitchens --------- */}
					<Route path="/brightkitchen" element={<BrightKitchenPage />} />
					<Route path="/humblekitchen" element={<HumbleKitchenPage />} />
					<Route path="/elegntkitchen" element={<ElegantKitchenPage />} />
					<Route path="/greenkitchen" element={<GreenKitchenPage />} />

					{/* bathrooms --------- */}
					<Route path="/vintagebath" element={<VintageBathroomPage />} />
					<Route path="/modernbath" element={<ModernBathroomPage />} />
					<Route path="/grungebath" element={<GrungeBathroomPage />} />
					<Route path="/brightbath" element={<BrightBathroomPage />} />
					{/* <Route path="/clothes" element={<ClothesPage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/admin" element={<AdminPage />} /> */}
					{/* <Route path="/cart" element={<CartPage />} /> */}
					{/*
					<Route path="/contact" element={<ContactPage />} /> */}
				</Routes>
				{/* <Navigate  to="/main" /> */}
			</Suspense>
		</BrowserRouter>
	);
}

export default App;