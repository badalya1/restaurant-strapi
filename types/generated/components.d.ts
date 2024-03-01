import type { Schema, Attribute } from '@strapi/strapi';

export interface PricePortionSize extends Schema.Component {
  collectionName: 'components_price_portion_sizes';
  info: {
    displayName: 'Portioned Price';
    description: '';
  };
  attributes: {
    portion: Attribute.Component<'price.portion', true> & Attribute.Required;
  };
}

export interface PricePortion extends Schema.Component {
  collectionName: 'components_price_portions';
  info: {
    displayName: 'Portion';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Decimal & Attribute.Required;
  };
}

export interface PriceRegularPrice extends Schema.Component {
  collectionName: 'components_price_regular_prices';
  info: {
    displayName: 'Regular Price';
  };
  attributes: {
    price: Attribute.Decimal & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'price.portion-size': PricePortionSize;
      'price.portion': PricePortion;
      'price.regular-price': PriceRegularPrice;
    }
  }
}
