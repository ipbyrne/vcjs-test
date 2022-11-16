import { resolvers } from "./resolvers.js";
import { contexts } from "./contexts/index.js";
import { documents } from "./documents/index.js";


export const documentLoader = async (iri) => {
  if (iri) {
    if (contexts[iri]) {
      return { document: contexts[iri] };
    }

    if (documents[iri]) {
      return { document: documents[iri] };
    }

    if (iri.startsWith("did:")) {
      const { didDocument }= await resolvers.resolve(iri);

      return { document: didDocument };
    }
  }

  if (iri.startsWith("http")) {
    const document = await resolvers.http(iri);
    return { document };
  }

  const message = "Unsupported iri: " + iri;
  console.warn(message);
  throw new Error(message);
};
