import {
  AttributeKeyType,
  CategoryDetail,
  ProductType,
} from "./Types/InterfaceTypes";
export const categories: CategoryDetail[] = [
  { id: 1, name: "Electronics", path: "/electronics" },
  { id: 2, name: "Fashion", path: "/fashion" },
  { id: 3, name: "Toys", path: "/toys" },
  { id: 4, name: "Gaming", path: "/gaming" },
  { id: 5, name: "Manga", path: "/manga" },
];

export const productDefaultValues: ProductType = {
  id: "",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  categoryId: 0,
  imageList: [],
};

export const attributeMap = new Map<number, keyof typeof AttributeKeyType>([
  [1, "COLOR"],
  [2, "CAPACITY"],
  [3, "RAM"],
  [4, "SIZE"],
  [5, "REFRESH_RATE"],
]);

export const IMAGE_WIDTH_MOBILE = "200";
export const IMAGE_WIDTH_DESKTOP = "386";
export const IMAGE_FORMAT_MOBILE = "q_auto";
export const IMAGE_FORMAT_DESKTOP = "f_auto/q_auto:eco";

export const categoryMap = new Map<number, string>([
  [1, "Electronics"],
  [2, "Fashion"],
  [3, "Toys"],
  [4, "Gaming"],
  [5, "Manga"],
]);
