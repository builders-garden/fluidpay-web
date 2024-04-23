"use client"
import { Button, Divider, Link } from "@nextui-org/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useState } from "react"
import { erc20Abi } from "viem"
import { useAccount, useWriteContract } from "wagmi"

export default function Send({
  params: { username },
}: {
  params: { username: string }
}) {
  const { isConnected, address } = useAccount()
  const { writeContract } = useWriteContract()
  const [amount, setAmount] = useState()
  const performPayment = async () => {
    if (!isConnected) {
      return
    }
    // Perform payment
    await writeContract({
      abi: erc20Abi,
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      functionName: "transfer",
      args: [address as `0x${string}`, BigInt(parseFloat(amount) * 10 ** 6)],
    })
  }
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
        <div className="flex flex-col space-y-4 justify-center text-center items-center">
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
          <div className="flex flex-row items-center justify-center text-center gap-4">
            <Divider
              dir="horizontal"
              className="text-primary bg-primary h-0.5"
            />
            <div>or</div>
            <Divider
              dir="horizontal"
              className="text-primary bg-primary h-0.5"
            />
          </div>
          <ConnectButton chainStatus={"icon"} label="Pay with another wallet" />
          {isConnected && (
            <>
              <input
                type="number"
                value={amount}
                placeholder="0,00"
                maxLength={4}
                onChange={(e) => setAmount(e.target.value)}
                className={`text-center bg-transparent text-6xl font-semibold border-0 outline-none appearance-none text-primary`}
              />
              <Button
                onClick={performPayment}
                type="button"
                color="primary"
                size="lg"
                radius="full"
              >
                Pay
              </Button>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
