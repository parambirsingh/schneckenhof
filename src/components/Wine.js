import React from "react";
import accounting from "accounting";
import AddToCart from "./AddToCart";
import AwwardBadge from "./AwardBadge";

const onWineChange = wine => { };

const priceInt = price => Math.floor(price);
const priceDecimals = price => Math.round((price - priceInt(price)) * 100);

const PriceInt = ({ price }) => (
  <span className="price__int">{priceInt(price)}</span>
);

const PriceDec = ({ price }) => (
  <span className="price__decimals">
    {priceDecimals(price) ? priceDecimals(price) : "00"}
  </span>
);
const NotAvailableMessage = ({ availability }) => (
  <span>
    {availability ? "" : "Ausgetrunken. Ab September wieder verfügbar"}
  </span>
);

export default ({ wine }) => (
  <div className="simpleCart_shelfItem c-wine">
    <div className="image">
      <a>
        <img src={wine.image} />
      </a>
    </div>

    <AwwardBadge awardText={wine.awardText} awardLevel={wine.awardLevel} />

    <div className="description">
      <div>
        {wine.vintage != 0 && (
          <div className="wine__vintage">
            {wine.vintage}
          </div>
        )}
        <h4 className="item_name">{wine.name ? wine.name : wine.varietal}</h4>

        {wine.varietal && (
          <h4 className="item_varietal" style={{ height: 10 }}>
            {wine.varietal}
          </h4>
        )}
        {wine.availability && <AddToCart item={wine} />}

        {wine.availability && (
          <div className="wine__costs">
            {wine.packaging && (
              <span className="content">
                <span className="item_content">
                  {wine.packaging.displayName ||
                    wine.packaging.measure + wine.packaging.unitOfMeasure}
                </span>
                {/* {wine.content < 1 && <span className='liter-price'>{accounting.formatMoney(wine.price / (wine.content * 100) * 100, '€', 2, '.', ',')}/l</span>} */}
                {wine.packaging.unitOfMeasure != "l" && wine.packaging.measure < 1000 && (
                  <span className="liter-price">
                    {accounting.formatMoney(
                      wine.price / wine.packaging.measure * 1000,
                      "€",
                      2,
                      ".",
                      ","
                    )}/l
                  </span>
                )}
              </span>
            )}

            <span className="c-price">
              <PriceInt price={wine.price} />
              <PriceDec price={wine.price} />
            </span>
          </div>
        )}
        <NotAvailableMessage availability={wine.availability} />
      </div>
    </div>
  </div>
);
