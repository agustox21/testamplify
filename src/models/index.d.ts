import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ProductStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  DISABLED = "DISABLED"
}

export enum OrderStatus {
  UNPAID = "UNPAID",
  NEW_ORDER = "NEW_ORDER",
  PROCESSING = "PROCESSING",
  DELIVERING = "DELIVERING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

export enum ArticleCategory {
  PAGE = "PAGE",
  TIPS_AND_TRICKS = "TIPS_AND_TRICKS",
  NEWS = "NEWS",
  VIDEO = "VIDEO"
}

export enum ArticleStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  DISABLED = "DISABLED"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type TenantProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PromoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourierMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArticleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MediaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TenantProfile {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly whatsappID?: string;
  readonly facebookID?: string;
  readonly twitterID?: string;
  readonly instagramID?: string;
  readonly youtubeID?: string;
  readonly tiktokID?: string;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TenantProfile, TenantProfileMetaData>);
  static copyOf(source: TenantProfile, mutator: (draft: MutableModel<TenantProfile, TenantProfileMetaData>) => MutableModel<TenantProfile, TenantProfileMetaData> | void): TenantProfile;
}

export declare class UserProfile {
  readonly id: string;
  readonly personID: string;
  readonly fullname?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly avatar?: string;
  readonly addresses?: (Address | null)[];
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

export declare class Address {
  readonly id: string;
  readonly userID?: string;
  readonly contactPerson?: string;
  readonly phone?: string;
  readonly address?: string;
  readonly city?: string;
  readonly zipCode?: number;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly sku?: string;
  readonly price?: number;
  readonly weight?: number;
  readonly shortDescription?: string;
  readonly description?: string;
  readonly status: ProductStatus | keyof typeof ProductStatus;
  readonly bestSeller?: boolean;
  readonly category?: string;
  readonly subcategory?: string;
  readonly images?: (S3Object | null)[];
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Promo {
  readonly id: string;
  readonly price?: number;
  readonly promoText?: string;
  readonly promoTextColor?: string;
  readonly promoTextBG?: string;
  readonly slogan?: string;
  readonly image?: S3Object;
  readonly banner?: boolean;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Promo, PromoMetaData>);
  static copyOf(source: Promo, mutator: (draft: MutableModel<Promo, PromoMetaData>) => MutableModel<Promo, PromoMetaData> | void): Promo;
}

export declare class Order {
  readonly id: string;
  readonly orderStatus: OrderStatus | keyof typeof OrderStatus;
  readonly items?: (OrderItem | null)[];
  readonly addressID: string;
  readonly address?: Address;
  readonly shippingRefID?: string;
  readonly shippingFee?: number;
  readonly tax?: number;
  readonly totalPrice?: number;
  readonly paymentGatewayRefID?: string;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OrderItem {
  readonly id: string;
  readonly orderID: string;
  readonly productID: string;
  readonly product?: Product;
  readonly quantity: number;
  readonly price: number;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderItem, OrderItemMetaData>);
  static copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem, OrderItemMetaData>) => MutableModel<OrderItem, OrderItemMetaData> | void): OrderItem;
}

export declare class Courier {
  readonly id: string;
  readonly name?: string;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Courier, CourierMetaData>);
  static copyOf(source: Courier, mutator: (draft: MutableModel<Courier, CourierMetaData>) => MutableModel<Courier, CourierMetaData> | void): Courier;
}

export declare class Article {
  readonly id: string;
  readonly category?: ArticleCategory | keyof typeof ArticleCategory;
  readonly status?: ArticleStatus | keyof typeof ArticleStatus;
  readonly image?: S3Object;
  readonly title?: string;
  readonly description?: string;
  readonly content?: string;
  readonly publishedDate?: string;
  readonly location?: string;
  readonly view?: number;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Article, ArticleMetaData>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article, ArticleMetaData>) => MutableModel<Article, ArticleMetaData> | void): Article;
}

export declare class Media {
  readonly id: string;
  readonly name?: string;
  readonly contenttype?: string;
  readonly file?: S3Object;
  readonly admin?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Media, MediaMetaData>);
  static copyOf(source: Media, mutator: (draft: MutableModel<Media, MediaMetaData>) => MutableModel<Media, MediaMetaData> | void): Media;
}