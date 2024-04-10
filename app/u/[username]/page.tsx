import { Button, Link } from "@nextui-org/react";

export default function Send({
  params: { username },
}: {
  params: { username: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24 space-y-8">
      <div className="flex flex-col space-y-8">
        <div>
          <span className="text-6xl text-blue-700 font-semibold">fluid</span>
          <span className="text-6xl text-white font-semibold">pay</span>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-xl">
            <span className="text-mutedGrey">Send to</span>{" "}
            <span className="font-semibold">{username}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Button type="button" color="primary" size="lg" radius="full">
            Install Fluidpay
          </Button>
          <Link href={`https://fluidpay.xyz/u/${username}`}>
            <Button
              type="button"
              color="primary"
              size="lg"
              variant="bordered"
              radius="full"
            >
              Already have it? Open in app
            </Button>
          </Link>
          <Button
            type="button"
            color="primary"
            variant="light"
            size="lg"
            radius="full"
          >
            Pay with another wallet
          </Button>
        </div>
      </div>
    </main>
  );
}
