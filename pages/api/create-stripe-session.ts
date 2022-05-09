import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2020-08-27'});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { item } = req.body;

  const redirectURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/checkout'
    : 'INSERT PROD REDIRECT URL';

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      images: item.image,
    },
  });
  
  res.json({ id: session.id });  
};
