import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-date-picker';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import api from '../../../api';

import * as S from './styles';

type CreateDeveloperFormData = {
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: Date | string | null;
};

const schema = yup
  .object({
    nome: yup.string().required('O campo Nome é obrigatório'),
    sexo: yup.string().required('O campo Sexo é obrigatório'),
    datanascimento: yup
      .string()
      .required('O campo Data de Nascimento é obrigatório'),
    idade: yup.string().required('O campo Idade é obrigatório'),
    hobby: yup.string().required('O campo Hobby é obrigatório'),
  })
  .required();

export default function Edit() {
  const { developerId } = useParams();

  const navigate = useNavigate();

  const [developer, setDeveloper] = useState<CreateDeveloperFormData>();
  const [dataNascimento, setDataNascimento] = useState<any>(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateDeveloperFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: developer?.nome,
      idade: developer?.idade,
    },
  });

  useEffect(() => {
    async function loadClientData(): Promise<void> {
      try {
        const response = await api.get(`/developers/${developerId}`);
        setDeveloper(response.data);
        const getDataNascimento = new Date(response.data.datanascimento);
        setDataNascimento(getDataNascimento);
        reset(response.data);
      } catch (error: any) {
        toast.error(`Erro ao buscar dados do developer. Erro: ${error} `);
      }
    }

    loadClientData();
  }, [developerId, reset]);

  const onSubmitDeveloper = async (data: CreateDeveloperFormData) => {
    try {
      const response = await api.put(`/developers/${developerId}`, data);
      toast.success('O Developer foi editado com sucesso!');
      reset(response.data);
      setTimeout(function reload() {
        navigate('/');
      }, 2000);
    } catch (error: any) {
      toast.error(`Erro ao cadastrar developer. Erro: ${error} `);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitDeveloper)}>
      <h2>Editar Desenvolvedor</h2>
      <div className="col">
        <div className="groupInput">
          <input type="text" placeholder="Nome" {...register('nome')} />
          <div className="errorSubmit">{errors.nome?.message}</div>
        </div>
      </div>
      <div className="col">
        <div className="groupInput">
          <select {...register('sexo')}>
            <option disabled selected value="">
              --Selecione o Sexo--
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
          <div className="errorSubmit">{errors.sexo?.message}</div>
        </div>
        <div className="groupInput">
          <Controller
            control={control}
            name="datanascimento"
            render={() => (
              <DatePicker
                className="input"
                onChange={setDataNascimento}
                value={dataNascimento}
              />
            )}
          />
          <div className="errorSubmit">{errors.datanascimento?.message}</div>
        </div>
        <div className="groupInput">
          <input type="number" placeholder="Idade" {...register('idade')} />
          <div className="errorSubmit">{errors.idade?.message}</div>
        </div>
      </div>
      <div className="col">
        <div className="groupInput">
          <textarea rows={5} placeholder="Hobby" {...register('hobby')} />
          <div className="errorSubmit">{errors.hobby?.message}</div>
        </div>
      </div>
      <button className="submitForm" type="submit">
        Editar
      </button>
    </S.Form>
  );
}
