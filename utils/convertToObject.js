// utils/convertToObject.js
export function convertToSerializeableObject(leanDocument) {
  if (leanDocument == null || typeof leanDocument !== 'object') {
    return {};
  }

  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key] && leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}
