"use client"
import { USDC_BASE_ADDRESS } from "@/utils/constants"
import { Button, Divider } from "@nextui-org/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { erc20Abi, formatUnits } from "viem"
import { useAccount, useReadContract, useWriteContract } from "wagmi"

export default function Request({
  params: { username, amount },
}: {
  params: { username: string; amount: string }
}) {
  const { isConnected, address } = useAccount()
  const { writeContract } = useWriteContract()
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
  const { data, isLoading } = useReadContract({
    abi: erc20Abi,
    address: USDC_BASE_ADDRESS,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
  })
  const notEnoughBalance =
    !isLoading &&
    parseFloat(amount!) > parseFloat(formatUnits(data ?? BigInt(0), 6))
  const canPay = !amount || !isConnected || isLoading || notEnoughBalance
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24 space-y-8">
      <div className="flex flex-col space-y-8">
        <div>
          <span className="text-6xl text-primary font-semibold">P</span>
          <span className="text-6xl text-white font-semibold">link</span>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-xl">
            <span className="font-semibold">{username}</span>{" "}
            <span className="text-mutedGrey">is requesting</span>
          </div>
          <p className="text-primary text-6xl font-semibold">
            ${parseFloat(amount).toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col space-y-4 justify-center text-center items-center">
          <Button
            className="w-full"
            type="button"
            color="primary"
            size="lg"
            radius="full"
          >
            Install Plink
          </Button>
          <Link href={`https://plink.finance/u/${username}/request/${amount}`}>
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
          <div>
            <span className="text-lg text-mutedGrey">Your balance</span>{" "}
            <span className="text-lg font-semibold">
              {isLoading
                ? "Loading..."
                : `$${parseFloat(formatUnits(data!, 6)).toFixed(2)}`}
            </span>
            {notEnoughBalance && (
              <p className="text-sm text-red-500">Not enough balance</p>
            )}
          </div>
          {isConnected && (
            <Button
              onClick={performPayment}
              type="button"
              color="primary"
              size="lg"
              radius="full"
              className={`${canPay ? "opacity-50 w-full" : "w-full"}`}
              disabled={canPay}
            >
              Pay
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
