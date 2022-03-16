// @ts-ignore
const parseKML = require("parse-kml");
import PolygonLookup from "polygon-lookup";

let tree: any = null;

export const getOutletIdentifier = async (lat: number, lng: number) => {
  // check if the tree is available for polygon lookup
  if (!tree) {
    // load the KML and create a tree
    const json = await parseKML.toJson(`${__dirname}/delivery-areas.kml`);
    tree = new PolygonLookup(json);
  }
  // search the coordinates in the tree
  const polygon = tree.search(lng, lat);
  if (polygon) {
    return { outletIdentifier: polygon.properties.name };
  }
  return { outletIdentifier: null };
};
