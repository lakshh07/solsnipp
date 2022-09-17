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

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SnippetCreated extends ethereum.Event {
  get params(): SnippetCreated__Params {
    return new SnippetCreated__Params(this);
  }
}

export class SnippetCreated__Params {
  _event: SnippetCreated;

  constructor(event: SnippetCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get label(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get hash(): string {
    return this._event.parameters[3].value.toString();
  }

  get status(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get owner(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class SolSnipp__fetchSnippetsResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get label(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get hash(): string {
    return this[3].toString();
  }

  get status(): boolean {
    return this[4].toBoolean();
  }

  get owner(): Address {
    return this[5].toAddress();
  }
}

export class SolSnipp extends ethereum.SmartContract {
  static bind(address: Address): SolSnipp {
    return new SolSnipp("SolSnipp", address);
  }

  fetchSnippets(): Array<SolSnipp__fetchSnippetsResultValue0Struct> {
    let result = super.call(
      "fetchSnippets",
      "fetchSnippets():((uint256,string,string,string,bool,address)[])",
      []
    );

    return result[0].toTupleArray<SolSnipp__fetchSnippetsResultValue0Struct>();
  }

  try_fetchSnippets(): ethereum.CallResult<
    Array<SolSnipp__fetchSnippetsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchSnippets",
      "fetchSnippets():((uint256,string,string,string,bool,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<SolSnipp__fetchSnippetsResultValue0Struct>()
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CreateSnippetCall extends ethereum.Call {
  get inputs(): CreateSnippetCall__Inputs {
    return new CreateSnippetCall__Inputs(this);
  }

  get outputs(): CreateSnippetCall__Outputs {
    return new CreateSnippetCall__Outputs(this);
  }
}

export class CreateSnippetCall__Inputs {
  _call: CreateSnippetCall;

  constructor(call: CreateSnippetCall) {
    this._call = call;
  }

  get _label(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _hash(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _approveStatus(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class CreateSnippetCall__Outputs {
  _call: CreateSnippetCall;

  constructor(call: CreateSnippetCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
