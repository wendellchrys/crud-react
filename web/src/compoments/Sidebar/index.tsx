import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import {
//   FaGenderless,
//   FaCalendarCheck,
//   FaAddressCard,
//   FaFemale,
//   FaMale,
// } from 'react-icons/fa';

import * as S from './styles';

export default function Sidebar(): JSX.Element {
  return (
    <>
      <S.Sidebar>
        <h3>Desenvolvedores</h3>
        <ul>
          <li>
            <Link to="/" className="active">
              <span className="icon">
                <i className="fas fa-home" />
              </span>
              <span className="item">Listar Todos</span>
            </Link>
          </li>
          <li>
            <Link to="/cadastrar">
              <span className="icon">
                <i className="fas fa-desktop" />
              </span>
              <span className="item">Cadastrar</span>
            </Link>
          </li>
        </ul>
      </S.Sidebar>
    </>
  );
}
