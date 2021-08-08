import React from "react";

class DataDisplay extends React.Component {
  render() {
    return (
      <div className="mb2">
        <h2>Nutritional value</h2>
        <div>Red tomatoes, raw, per 100 g (3.5 oz)</div>
        <div className="grid-2cols mt1">
          <div className="divider-above divider-below">Energy</div>
          <div className="divider-above divider-below">74kJ (18 kcal)</div>
          <div>Carbohydrates</div>
          <div>3.9 g</div>
          <div>- Sugars</div>
          <div>2.6 g</div>
          <div className="divider-below">- Dietary fiber</div>
          <div className="divider-below">1.2 g</div>
          <div className="divider-below">Fat</div>
          <div className="divider-below">0.2 g</div>
          <div className="divider-below">Protein</div>
          <div className="divider-below">0.9 g</div>
          <div className="divider-below">Water</div>
          <div className="divider-below">94.5 g</div>
          <div>Vitamin A equiv.</div>
          <div>42 μg (5%)</div>
          <div className="divider-below">- lutein and zeaxanthin</div>
          <div className="divider-below">123 μg</div>
          <div className="divider-below">Vitamin C</div>
          <div className="divider-below">14 mg (17%)</div>
          <div className="divider-below">Vitamin E</div>
          <div className="divider-below">0.54 mg (4%)</div>
          <div className="divider-below">Potassium</div>
          <div className="divider-below">237 mg (5%)</div>
        </div>
        <div className="mtb1">
          Percentages are relative to US recommendations for adults.
          <br />
          Source:{" "}
          <a href="http://www.nal.usda.gov" target="_blank" rel="noreferrer">
            USDA Nutrient Database
          </a>
        </div>
      </div>
    );
  }
}

export default DataDisplay;
