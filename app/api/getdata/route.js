import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const res = await fetch(
      "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
    );
    const response = await res.json();
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
};
