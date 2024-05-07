import React, { useState } from "react";

import { encryptEndpoint, decryptEndpoint, cipherRequest } from "./api";
import { Layout, Input, PageButton } from "./components";

export default function App() {
  const [plaintextValue, setPlaintextValue] = useState('');
  const [ciphertextValue, setCiphertextValue] = useState('');
  const [keyValue, setKeyValue] = useState(0);
  const [cipherButtonEndpoint, setCipherButtonEndpoint] = useState(encryptEndpoint);
  
  const onInput = (inputType) => {
    return inputType == "plain" ?
    (e) => {setCipherButtonEndpoint(encryptEndpoint); setPlaintextValue(e.target.value)}
    : inputType == "cipher" ?
    (e) => {setCipherButtonEndpoint(decryptEndpoint); setCiphertextValue(e.target.value)}
    :
    (e) => setKeyValue(e.target.value)
  }

  const sendCipherRequest = (endpoint) => {
    return async () => {
      var bodyText = plaintextValue;
      var setValue = setCiphertextValue;
      var resetValue = setPlaintextValue;
      if (endpoint === decryptEndpoint) {
        bodyText = ciphertextValue;
        setValue = setPlaintextValue;
        resetValue = setCiphertextValue;
      }
      const response = await cipherRequest({endpoint, body: {text: bodyText, key: parseInt(keyValue) | 0}})
      setValue(response.text);
      resetValue('');
      setCipherButtonEndpoint(cipherButtonEndpoint === encryptEndpoint ? decryptEndpoint : encryptEndpoint);
    }
  }

  return (
    <Layout
      plainText={<Input id="plainText" value={plaintextValue} changeHandler={onInput("plain")} />}
      cipherText={<Input id="cipherText" value={ciphertextValue} changeHandler={onInput("cipher")} />}
      keyText={<Input id="keyText" value={keyValue} changeHandler={onInput("key")} type="number"/>}
      cipherButton={<PageButton text="Encrypt ⇋ Decrypt" clickHandler={sendCipherRequest(cipherButtonEndpoint)} />}
    />
  )

}
