import * as didKey from "@transmute/did-key.js";
import axios from "axios";
import DIDWeb from "./DIDWeb.js";

export const resolvers = {
  http: async (url) => {
    const resp = await axios({
      method: "get",
      url,
      headers: {
        // Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    return resp.data;
  },
  resolve: async (did) => {
    if (did.startsWith("did:key")) {
      const { didDocument } = await didKey.resolve(did.split("#")[0], {
        accept: "application/did+json",
      });
      return { didDocument };
    }
    if (did.startsWith("did:web")) {
      const didDocument = await DIDWeb.resolve(did);
      return { didDocument };
    }
    throw new Error("Unsupported did method");
  },
};
