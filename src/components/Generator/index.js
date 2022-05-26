import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form';

function Generator() {
  const [result, setResult] = useState('');
  const [data, setData] = useState({
    url: 'https://loripsum.net/api/',
    size: '3',
    length: 'short',
  });

  const [checkboxes, setCheckboxes] = useState({
    decorate: '',
    link: '',
    ul: '',
    ol: '',
    dl: '',
    bq: '',
    code: '',
    headers: '',
    allcaps: '',
    prude: '',
    plaintext: '',
  });

  const createOptionsUrl = () => {
    let optionsURL = '';
    for (let key in checkboxes) {
      if (checkboxes[key] === '') {
        continue;
      } else {
        optionsURL += `${checkboxes[key]}`;
        optionsURL += '/';
      }
    }
    return optionsURL;
  };

  useEffect(() => {
    const mainURL = `${data.size}/${data.length}/`;
    // console.log(mainURL);
    const optionsURL = createOptionsUrl();
    // console.log(optionsURL);
    const latestURL = mainURL + optionsURL;
    // console.log(latestURL);
    const fetchData = async url => {
      const response = await axios.get(url);
      const result = response.data;
      setResult(result);
    };
    fetchData(latestURL);
    // eslint-disable-next-line
  }, [data, checkboxes]);

  const dataChecker = e => {
    if (e.target.name === e.target.value) {
      return '';
    } else {
      return e.target.name;
    }
  };

  const paragraphHandleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const checkboxesHandleChange = e => {
    const val = dataChecker(e);
    setCheckboxes({ ...checkboxes, [e.target.name]: val });
  };

  return (
    <Form
      data={data}
      checkboxes={checkboxes}
      paragraphHandleChange={paragraphHandleChange}
      checkboxesHandleChange={checkboxesHandleChange}
      result={result}
    />
  );
}

export default Generator;
