// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Voted extends ethereum.Event {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get grantAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get projectId(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get applicationIndex(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get roundAddress(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  VERSION(): string {
    let result = super.call("VERSION", "VERSION():(string)", []);

    return result[0].toString();
  }

  try_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall("VERSION", "VERSION():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  roundAddress(): Address {
    let result = super.call("roundAddress", "roundAddress():(address)", []);

    return result[0].toAddress();
  }

  try_roundAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("roundAddress", "roundAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get encodedVotes(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get voterAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}
