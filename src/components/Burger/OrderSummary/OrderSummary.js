import React, { Component } from 'react';
import { Button } from '../../UI';

export class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }

  render() {
    const {
      ingredients,
      price,
      purchaseCancelled,
      purchaseContinue
    } = this.props;
    const ingredientSummary = Object.keys(ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {ingredients[igKey]}
        </li>
      );
    });

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button kind="Danger" onClick={purchaseCancelled}>
          CANCEL
        </Button>
        <Button kind="Success" onClick={purchaseContinue}>
          CONTINUE
        </Button>
      </>
    );
  }
}
