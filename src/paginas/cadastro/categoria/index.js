import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/Pagedefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button/index';

function CadastroCategoria() {
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor: '#000',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);



  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
  setValue(infosDoEvento.target.getAttribute('name'), 
  infosDoEvento.target.value);
  }

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);
 

  //   setTimeout(() => {
  //     setCategorias([
  //       ...categorias,
  //           {
  //             id: "1",
  //             nome: "FrontEWnd",
  //             descricao: "Uma categoria bacana",
  //             cor: "#cbd1ff"
  //           },
  //           {
  //             id: "2",
  //             nome: "BackEWnd",
  //             descricao: "Uma categoria +-",
  //             cor: "#cbd1ff"
  //           }
  //     ]);

  //   }, 4*1000);
  // }, []);
    
  return (
    <PageDefault>
      <h1> Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])

        setValues(valoresIniciais)
      }}>

        <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange} />

        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

          {/* <div>
            <label>
              Descrição:
            <textarea type="text" value={values.descricao} name="descricao" onChange={handleChange} />
            </label>
          </div> */}

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

          {/* <div>
            <label>
              Cor:
            <input type="color" value={values.cor} name="cor" onChange={handleChange}/>
            </label>
          </div> */}
        
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.nome}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

  
export default CadastroCategoria;