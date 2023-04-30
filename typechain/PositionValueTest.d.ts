/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PositionValueTestInterface extends ethers.utils.Interface {
  functions: {
    "fees(address,uint256)": FunctionFragment;
    "feesGas(address,uint256)": FunctionFragment;
    "principal(address,uint256,uint160)": FunctionFragment;
    "principalGas(address,uint256,uint160)": FunctionFragment;
    "total(address,uint256,uint160)": FunctionFragment;
    "totalGas(address,uint256,uint160)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "fees",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feesGas",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "principal",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "principalGas",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "total",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalGas",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feesGas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "principal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "principalGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalGas", data: BytesLike): Result;

  events: {};
}

export class PositionValueTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PositionValueTestInterface;

  functions: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "fees(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "feesGas(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "principal(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "principalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "total(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  fees(
    nft: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    amount0: BigNumber;
    amount1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "fees(address,uint256)"(
    nft: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    amount0: BigNumber;
    amount1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  feesGas(
    nft: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "feesGas(address,uint256)"(
    nft: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  principal(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    amount0: BigNumber;
    amount1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "principal(address,uint256,uint160)"(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    amount0: BigNumber;
    amount1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  principalGas(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "principalGas(address,uint256,uint160)"(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  total(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    amount0: BigNumber;
    amount1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "total(address,uint256,uint160)"(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    amount0: BigNumber;
    amount1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  totalGas(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalGas(address,uint256,uint160)"(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "fees(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feesGas(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "principal(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "principalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "total(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fees(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feesGas(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "principal(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "principalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "total(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fees(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feesGas(address,uint256)"(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "principal(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "principalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "total(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalGas(address,uint256,uint160)"(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
