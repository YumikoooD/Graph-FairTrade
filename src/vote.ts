import {
  Initialized as InitializedEvent,
  Voted as VotedEvent
} from "../generated/vote/vote"
import { Initialized, Voted } from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoted(event: VotedEvent): void {
  let entity = new Voted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.voter = event.params.voter
  entity.grantAddress = event.params.grantAddress
  entity.projectId = event.params.projectId
  entity.applicationIndex = event.params.applicationIndex
  entity.roundAddress = event.params.roundAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
