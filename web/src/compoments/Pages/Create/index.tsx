/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-date-picker';
// import InputMask from 'react-input-mask';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import api from '../../../api';

import * as S from './styles';

type CreateDeveloperFormData = {
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: Date;
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

export default function Create() {
  const [dataNascimento, setDataNascimento] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<CreateDeveloperFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmitDeveloper = async (data: CreateDeveloperFormData) => {
    try {
      await api.post(`/developers`, data);
      toast.success('O Developer foi cadastrado com sucesso!');
      reset({
        nome: '',
        sexo: '',
        datanascimento: undefined,
        idade: undefined,
        hobby: '',
      });
      setTimeout(function reload() {
        window.location.reload();
      }, 2000);
    } catch (error: any) {
      toast.error(`Erro ao cadastrar developer. Erro: ${error} `);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitDeveloper)}>
      <h2>Cadastrar Desenvolvedor</h2>
      <div className="col">
        <div className="groupInput">
          <p>Nome:</p>
          <input type="text" placeholder="Nome" {...register('nome')} />
          <div className="errorSubmit">{errors.nome?.message}</div>
        </div>
      </div>
      <div className="col">
        <div className="groupInput">
          <p>Sexo:</p>
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
          <p>Data de Nascimento:</p>
          <Controller
            control={control}
            name="datanascimento"
            render={() => (
              <DatePicker
                className="input"
                onChange={(e: any) => {
                  setDataNascimento(e);
                  setValue('datanascimento', e);
                }}
                value={dataNascimento}
              />
            )}
          />
          <div className="errorSubmit">{errors.datanascimento?.message}</div>
        </div>
        <div className="groupInput">
          <p>Idade:</p>
          <input type="number" placeholder="Idade" {...register('idade')} />
          <div className="errorSubmit">{errors.idade?.message}</div>
        </div>
      </div>
      <div className="col">
        <div className="groupInput">
          <p>Hobby:</p>
          <textarea rows={5} placeholder="Hobby" {...register('hobby')} />
          <div className="errorSubmit">{errors.hobby?.message}</div>
        </div>
      </div>
      <button className="submitForm" type="submit">
        Cadastrar
      </button>
    </S.Form>
  );
}
