import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { Initialized, Voted } from "../generated/Contract/Contract"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createVotedEvent(
  token: Address,
  amount: BigInt,
  voter: Address,
  grantAddress: Address,
  projectId: Bytes,
  applicationIndex: BigInt,
  roundAddress: Address
): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "grantAddress",
      ethereum.Value.fromAddress(grantAddress)
    )
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromFixedBytes(projectId)
    )
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "applicationIndex",
      ethereum.Value.fromUnsignedBigInt(applicationIndex)
    )
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "roundAddress",
      ethereum.Value.fromAddress(roundAddress)
    )
  )

  return votedEvent
}
