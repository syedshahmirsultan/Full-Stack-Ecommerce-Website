import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import singleProductType from '../../../../types';

interface typeOfData {
  price: string;
  quautity: number; 
  name: string;
}

const originalData: Array<typeOfData> = [
  { price: "price_1POFB3E9slNBw1m7TG6CMiLU", quautity: 1, name: "Cameryn Sash Tie Dress" },
  { price: "price_1POFAGE9slNBw1m7xffCMI8V", quautity: 1, name: "Lite Sweatpants" },
  { price: "price_1POF9KE9slNBw1m7Ol1h3j63", quautity: 1, name: "Flex Sweatpants" },
  { price: "price_1POF8TE9slNBw1m7KjoyWgcb", quautity: 1, name: "Imperial Alpaca Hoodie" },
  { price: "price_1POF5SE9slNBw1m7dJfTCQCs", quautity: 1, name: "Imperial Alpaca Hoodie Woman" },
  { price: "price_1POF1nE9slNBw1m7uZyZDHdl", quautity: 1, name: "Flex Sweatshirt" },
  { price: "price_1POF15E9slNBw1m7hXLcHAbH", quautity: 1, name: "Men Hoodie" },
  { price: "price_1POF0NE9slNBw1m7t6oN1Kd2", quautity: 1, name: "Brushed Raglan Sweatshirt" },
  { price: "price_1POEybE9slNBw1m7QFTH79G4", quautity: 1, name: "Flex Push Button Bomber" },
  { price: "price_1POEwxE9slNBw1m71fJdjdCU", quautity: 1, name: "Raglan Sweatshirt" },
  { price: "price_1POEvpE9slNBw1m7bsTvkqXD", quautity: 1, name: "Pink Fleece Sweatpants" }
];

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);
export async function POST(req: NextRequest) {
  let cartItemArray: singleProductType[] = await req.json();
  try {
    const line_items = cartItemArray.map(cartItem => {
      const product = originalData.find(item => item.name === cartItem.productname);
      if (!product) {
        throw new Error(`Product not found: ${cartItem.productname}`);
      }
      return {
        price: product.price,
        quantity: cartItem.quantity, // Correct quantity mapping
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    });

    console.log("Session URL:", session.url);
    return NextResponse.json({ link: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json({ error: error });
  }
}
