import localFont from "next/font/local";

export const raleway = localFont({
  src: [
    {
      path: "./Raleway-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Raleway-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Raleway-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Raleway-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Raleway-Black.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
