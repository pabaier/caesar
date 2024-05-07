const baseUrl = "http://localhost:8080/caesar/";
export const encryptEndpoint = 'encrypt';
export const decryptEndpoint = 'decrypt';

export async function cipherRequest ({endpoint, body}) {
    return await fetch(`${baseUrl}${endpoint}`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
    };