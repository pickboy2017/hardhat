import type { RequestArguments } from "../../../../../types/providers.js";

import { numberToHexString } from "@ignored/hardhat-vnext-utils/hex";

import { getParams } from "../utils.js";

export class FixedGas {
  readonly #gas: bigint | number;

  constructor(gas: bigint | number) {
    this.#gas = gas;
  }

  public modifyRequest(args: RequestArguments): void {
    if (args.method === "eth_sendTransaction") {
      const params = getParams(args);

      // TODO: from V2 - Should we validate this type?
      const tx = params[0];

      if (tx !== undefined && tx.gas === undefined) {
        tx.gas = numberToHexString(this.#gas);
      }
    }
  }
}