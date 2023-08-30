import { ReactNode } from "react";
export interface ImageType {
  url: string;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  imageList: ImageType[];
  productAttributes?: ProductAttributeType[];
  productAttributeNodes?: ReactNode;
}

export interface ProductTypeWithAttributes extends ProductType {
  productAttributeNodes: ReactNode;
}

export interface CategoryDetail {
  id: number;
  name: string;
  path: string;
}

export interface UserLogin {
  userName: string;
  password: string;
}
export type ProductContextType = {
  product: ProductType;
  activeImageIndex: number;
  loading: boolean;
  error: any;
  setActiveImage: (index: number) => void;
  handleSliderDirection: (direction: string) => void;
  sliderDirection: string;
  colorAttributes?: ProductAttributeType[];
  sizeAttributes?: ProductAttributeType[];
};

export type ProductAttributeType = {
  attributeId: number;
  value: string;
};

export enum AttributeKeyType {
  COLOR = "COLOR",
  CAPACITY = "CAPACITY",
  RAM = "RAM",
  SIZE = "SIZE",
  REFRESH_RATE = "REFRESH_RATE",
}

export type UnionProductType = ProductType | ProductTypeWithAttributes;

export interface CartItem {
  id: string;
  product: ProductType;
  selectedAttributes: ProductAttributeType[];
  quantity: number;
  amount: number;
}

export type CartContextType = {
  count: number;
  items: CartItem[] | [];
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  updateCartItem: (item: CartItem, itemCount: number) => void;
  emptyCart: () => void;
};

export type AttributeContextType = {
  selectedAttributes: ProductAttributeType[] | [];
  handleSelectedAttributes: (id: number, value: string) => void;
  areAllAttributesSelected: () => boolean;
  setInitialAttributes: () => void;
};

export type AuthContextType = {
  user: UserType | null;
  authHeader: string;
  googleSignIn: () => Promise<void>;
  logOut: () => void;
  logIn: (data: UserLogin) => Promise<void>;
  registerUser: (data: UserRegisterModel) => Promise<void>;
  isLoading: boolean;
  checkAuthentication: () => boolean;
};

export type OrderContextType = {
  orders: OrderType[] | [];
  placeOrder: (items: CartItem[], total: number) => Promise<void>;
};

export type OrderType = {
  userId: number;
  total: number;
  orderItems: OrderItemType[];
  orderDate: Date;
};
export type OrderItemType = {
  quantity: number;
  product: ProductType;
  attributes: ProductAttributeType[] | null;
};

export type GoogleSignInModel = {
  userName: string;
  fullName: string;
  email: string;
  photoURL: string | null;
  token: string;
};

export type UserRegisterModel = {
  name: string;
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string | null;
};

export type UserType = {
  id: number;
  userName: string;
  userRoleId: number;
  fullName: string;
  email: string;
  googleId: string | "";
  photoURL: string | "";
};
