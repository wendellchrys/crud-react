import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateDeveloper } from './pages/Cadastrar';
import { EditDeveloper } from './pages/Editar';
import { Home } from './pages/Home';

export function RoutesApp(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<CreateDeveloper />} />
        <Route path="/editar/:developerId" element={<EditDeveloper />} />
      </Routes>
    </BrowserRouter>
  );
}
