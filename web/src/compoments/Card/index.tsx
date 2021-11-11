import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import {
  FaGenderless,
  FaCalendarCheck,
  FaAddressCard,
  FaFemale,
  FaMale,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

import * as S from './styles';

type DeveloperProps = {
  id: string;
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: Date;
};

export default function Card(): JSX.Element {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState<DeveloperProps[]>([]);

  async function deleteItem(id: any) {
    try {
      await api.delete(`/developers/${id}`);
      toast.success('O Developer foi excluído com sucesso!');
    } catch (error: any) {
      toast.error(`Erro ao excluir developer. Erro: ${error} `);
    }
  }

  function handleEdit(developerId: string): void {
    navigate(`/editar/${developerId}`);
  }

  useEffect(() => {
    async function loadDevelopers(): Promise<void> {
      try {
        const response = await api.get('/developers');
        setDevelopers(response.data);
      } catch (error: any) {
        toast.error(`Erro ao buscar developers. Erro: ${error} `);
      }
    }

    loadDevelopers();
  }, []);

  return (
    <>
      {developers?.map((developer: DeveloperProps) => (
        <S.Box key={developer.id}>
          <div className="image">
            {developer.sexo === 'Masculino' ? (
              <FaMale size="80px" />
            ) : (
              <FaFemale size="80px" />
            )}
          </div>
          <div className="content">
            <div className="groupTitle">
              <h1>{developer.nome}</h1>
              <button
                type="button"
                className="edit"
                onClick={() => handleEdit(developer.id)}
              >
                Editar
              </button>
              <button
                type="button"
                className="delete"
                onClick={() =>
                  // eslint-disable-next-line no-alert
                  window.confirm('Tem certeza que deseja excluir?') &&
                  deleteItem(developer.id)
                }
              >
                Excluir
              </button>
            </div>
            <div>
              <p>
                <FaGenderless size="20px" /> {developer.sexo}
              </p>
              <p>
                <FaAddressCard size="20px" /> {developer.idade} anos
              </p>
              <p>
                <FaCalendarCheck size="18px" />
                {format(new Date(developer.datanascimento), 'dd/MM/yyyy')}
              </p>
            </div>
            <p>
              <strong>Hobby:</strong> {developer.hobby}
            </p>
          </div>
        </S.Box>
      ))}
    </>
  );
}
