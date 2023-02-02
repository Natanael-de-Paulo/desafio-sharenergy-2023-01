import { useState, useEffect, useRef } from 'react';
import { Button } from '../../components/AuthForm/styles';
import { Input } from '../../components/Input';
import * as C from './styles';


export function HttpCat(){
  const data = useRef<any>();
  const [cat, setCat] = useState<string | number>('')
  const url = 'https://http.cat/'

  const HandleStatusCode = () => {
      (data.current.value? setCat(data.current.value) : setCat(404))
  }

  useEffect(() => {
    HandleStatusCode();
  }, []);

  return (
    <C.Container>
        <h1>Cat</h1>
        {cat && <img src={url+cat} alt={cat + ' HTTP cat'} />}
        <C.WrapperInput>
            <input placeholder='Digite um status HTTP' type='number' ref={data} />
            <button onClick={HandleStatusCode}>
                Get HTTP Cat
            </button>
        </C.WrapperInput>
    </C.Container>
  )
}