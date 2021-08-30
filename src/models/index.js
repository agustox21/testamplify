// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProductStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED",
  "DISABLED": "DISABLED"
};

const OrderStatus = {
  "UNPAID": "UNPAID",
  "NEW_ORDER": "NEW_ORDER",
  "PROCESSING": "PROCESSING",
  "DELIVERING": "DELIVERING",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const ArticleCategory = {
  "PAGE": "PAGE",
  "TIPS_AND_TRICKS": "TIPS_AND_TRICKS",
  "NEWS": "NEWS",
  "VIDEO": "VIDEO"
};

const ArticleStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED",
  "DISABLED": "DISABLED"
};

const { TenantProfile, UserProfile, Address, Product, Promo, Order, OrderItem, Courier, Article, Media, S3Object } = initSchema(schema);

export {
  TenantProfile,
  UserProfile,
  Address,
  Product,
  Promo,
  Order,
  OrderItem,
  Courier,
  Article,
  Media,
  ProductStatus,
  OrderStatus,
  ArticleCategory,
  ArticleStatus,
  S3Object
};