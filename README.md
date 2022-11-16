This repo is setup to quickly test `vc.js` in a containerized environment.

To build and run the docker container run:
```
docker build -t vcjs-test .
docker run -dp 8080:8080 vcjs-test
```

Then go to `http://localhost:8080` and you should see the verification result of a credential below without the container crashing.

```
{
   "verifiableCredential":{
      "@context":[
         "https://www.w3.org/2018/credentials/v1",
         "https://w3id.org/vc-revocation-list-2020/v1"
      ],
      "id":"urn:uuid:4737fa67-2531-4b75-b01b-cf848bbf5f28",
      "type":[
         "VerifiableCredential"
      ],
      "issuer":"did:key:z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn",
      "issuanceDate":"2010-01-01T19:23:24Z",
      "credentialStatus":{
         "id":"https://api.did.actor/revocation-lists/1.json#0",
         "type":"RevocationList2020Status",
         "revocationListIndex":0,
         "revocationListCredential":"https://api.did.actor/revocation-lists/1.json"
      },
      "credentialSubject":{
         "id":"did:example:123"
      },
      "proof":{
         "type":"Ed25519Signature2018",
         "created":"2022-11-16T16:47:18Z",
         "verificationMethod":"did:key:z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn#z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn",
         "proofPurpose":"assertionMethod",
         "jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..nke1eO8vWwY-iuhgH37zBy9W5gilhsFg_6NrTDl5yEF_0JjIak6_6WwX-yqVEe4zE4IZhOVnteSQjVRj_uyuBg"
      }
   },
   "result":{
      "verified":true
   }
}
```