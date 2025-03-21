import { Status } from "./permission.enum";

export enum AUTH_PERMISSIONS {
  ROLE_CREATE = "ROLE_CREATE",
  ROLE_UPDATE = "ROLE_UPDATE",
  ROLE_VIEW = "ROLE_VIEW",
  ROLE_DELETE = "ROLE_DELETE",

  PERMISSION_UPDATE = "PERMISSION_UPDATE",
  PERMISSION_VIEW = "PERMISSION_VIEW",
  PERMISSION_DELETE = "PERMISSION_DELETE",

  CUSTOMER_CREATE = "CUSTOMER_CREATE",
  CUSTOMER_UPDATE = "CUSTOMER_UPDATE",
  CUSTOMER_VIEW = "CUSTOMER_VIEW",
  CUSTOMER_DELETE = "CUSTOMER_DELETE",

  USER_CREATE = "USER_CREATE",
  USER_UPDATE="USER_UPDATE",
  USER_VIEW="USER_VIEW",
  USER_DELETE="USER_DELETE",

  CATEGORY_CREATE = "CATEGORY_CREATE",

  DISCOUNT_CREATE = "DISCOUNT_CREATE",
  DISCOUNT_UPDATE = "DISCOUNT_UPDATE",
  DISCOUNT_VIEW = "DISCOUNT_VIEW",
  DISCOUNT_DELETE = "DISCOUNT_DELETE",
  CATEGORY_UPDATE="CATEGORY_UPDATE",
  CATEGORY_VIEW="CATEGORY_VIEW",
  CATEGORY_DELETE="CATEGORY_DELETE",

  PRODUCT_CREATE="PRODUCT_CREATE",
  PRODUCT_UPDATE="PRODUCT_UPDATE",
  PRODUCT_VIEW="PRODUCT_VIEW",
  PRODUCT_DELETE="PRODUCT_DELETE",

  INVENTORES_CREATE="INVENTORES_CREATE",
  INVENTORES_UPDATE="INVENTORES_UPDATE",
  INVENTORES_VIEW="INVENTORES_VIEW",
  INVENTORES_DELETE="INVENTORES_DELETE",

  NOTIFICATION_CREATE="NOTIFICATION_CREATE",
  NOTIFICATION_UPDATE="NOTIFICATION_UPDATE",
  NOTIFICATION_VIEW="NOTIFICATION_VIEW",
  NOTIFICATION_DELETE="NOTIFICATION_DELETE",

  PROMOTION_CREATE="PROMOTION_CREATE",
  PROMOTION_UPDATE="PROMOTION_UPDATE",
  PROMOTION_VIEW="PROMOTION_VIEW",
  PROMOTION_DELETE="PROMOTION_DELETE",

  REVIEW_CREATE="REVIEW_CREATE",
  REVIEW_UPDATE="REVIEW_UPDATE",
  REVIEW_VIEW="REVIEW_VIEW",
  REVIEW_DELETE="REVIEW_DELETE",
  
  WAREHOUSE_CREATE="WAREHOUSE_CREATE",
  WAREHOUSE_UPDATE="WAREHOUSE_UPDATE",
  WAREHOUSE_VIEW="WAREHOUSE_VIEW",
  WAREHOUSE_DELETE="WAREHOUSE_DELETE",

  CONTACT_CREATE="CONTACT_CREATE",
  CONTACT_UPDATE="CONTACT_UPDATE",
  CONTACT_VIEW="CONTACT_VIEW",
  CONTACT_DELETE="CONTACT_DELETE",

  BLOGDETAIL_CREATE="BLOGDETAIL_CREATE",
  BLOGDETAIL_UPDATE="BLOGDETAIL_UPDATE",
  BLOGDETAIL_VIEW="BLOGDETAIL_VIEW",
  BLOGDETAIL_DELETE="BLOGDETAIL_DELETE",

  FAVOURITES_CREATE="FAVOURITES_CREATE",
  FAVOURITES_UPDATE="FAVOURITES_UPDATE",
  FAVOURITES_VIEW="FAVOURITES_VIEW",
  FAVOURITES_DELETE="FAVOURITES_DELETE",
}

export enum USER_PERMISSIONS {
  USER_VIEW = AUTH_PERMISSIONS.USER_VIEW,
}

export const AUTH_ROLES = {
  ROLE: {
    ROLE_CREATE: Status.PUBLISHED,
    ROLE_UPDATE: Status.PUBLISHED,
    ROLE_VIEW: Status.PUBLISHED,
    ROLE_DELETE: Status.PUBLISHED,
  },
  PERMISSION: {
    PERMISSION_UPDATE: Status.PUBLISHED,
    PERMISSION_VIEW: Status.PUBLISHED,
    PERMISSION_DELETE: Status.PUBLISHED,
  },
  CUSTOMER: {
    CUSTOMER_CREATE: Status.PUBLISHED,
    CUSTOMER_UPDATE: Status.PUBLISHED,
    CUSTOMER_VIEW: Status.PUBLISHED,
    CUSTOMER_DELETE: Status.PUBLISHED,
  },
  USER: {
    USER_VIEW: Status.PUBLISHED,
  },
  DISCOUNT: {
    DISCOUNT_CREATE: Status.PUBLISHED,
    DISCOUNT_UPDATE: Status.PUBLISHED,
    DISCOUNT_VIEW: Status.PUBLISHED,
    DISCOUNT_DELETE: Status.PUBLISHED,
  },
  CATEGORIES:{
    CATEGORY_CREATE : Status.PUBLISHED,
    CATEGORY_UPDATE:Status.PUBLISHED,
    CATEGORY_VIEW:Status.PUBLISHED,
    CATEGORY_DELETE:Status.PUBLISHED,
  },
  INVENTORIES:{
    INVENTORES_CREATE:Status.PUBLISHED,
    INVENTORES_UPDATE:Status.PUBLISHED,
    INVENTORES_VIEW:Status.PUBLISHED,
    INVENTORES_DELETE:Status.PUBLISHED,
  },
  NOTIFICATION:{
    NOTIFICATION_CREATE:Status.PUBLISHED,
    NOTIFICATION_UPDATE:Status.PUBLISHED,
    NOTIFICATION_VIEW:Status.PUBLISHED,
    NOTIFICATION_DELETE:Status.PUBLISHED,
  },
  PRODUCT:{
    PRODUCT_CREATE:Status.PUBLISHED,
    PRODUCT_UPDATE:Status.PUBLISHED,
    PRODUCT_VIEW:Status.PUBLISHED,
    PRODUCT_DELETE:Status.PUBLISHED,
  },
  PROMOTION:{
    PROMOTION_CREATE:Status.PUBLISHED,
    PROMOTION_UPDATE:Status.PUBLISHED,
    PROMOTION_VIEW:Status.PUBLISHED,
    PROMOTION_DELETE:Status.PUBLISHED,
  
  },
  REVIEW:{
    REVIEW_CREATE:Status.PUBLISHED,
    REVIEW_UPDATE:Status.PUBLISHED,
    REVIEW_VIEW:Status.PUBLISHED,
    REVIEW_DELETE:Status.PUBLISHED,
  },
  WAREHOUSE:{
    WAREHOUSE_CREATE:Status.PUBLISHED,
    WAREHOUSE_UPDATE:Status.PUBLISHED,
    WAREHOUSE_VIEW:Status.PUBLISHED,
    WAREHOUSE_DELETE:Status.PUBLISHED,
  },
  CONTACT:{
    CONTACT_CREATE:Status.PUBLISHED,
    CONTACT_UPDATE:Status.PUBLISHED,
    CONTACT_VIEW:Status.PUBLISHED,
    CONTACT_DELETE:Status.PUBLISHED,
  },
  BLOGDETAIL:{
    BLOGDETAIL_CREATE:Status.PUBLISHED,
    BLOGDETAIL_UPDATE:Status.PUBLISHED,
    BLOGDETAIL_VIEW:Status.PUBLISHED,
    BLOGDETAIL_DELETE:Status.PUBLISHED,
  },

  FAVOURITES:{
    FAVOURITES_CREATE:Status.PUBLISHED,
    FAVOURITES_UPDATE:Status.PUBLISHED,
    FAVOURITES_VIEW:Status.PUBLISHED,
    FAVOURITES_DELETE:Status.PUBLISHED,
  },

};

export const AUTH_PERMISSION_META_KEY = "auth_permission_meta_key";
