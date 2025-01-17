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

interface MockObservationsInterface extends ethers.utils.Interface {
  functions: {
    "liquidity()": FunctionFragment;
    "observations(uint256)": FunctionFragment;
    "slot0()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "slot0", values?: undefined): string;

  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;

  events: {};
}

export class MockObservations extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockObservationsInterface;

  functions: {
    liquidity(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "liquidity()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    "observations(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    slot0(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;

    "slot0()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;
  };

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "liquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  observations(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: number;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
  }>;

  "observations(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: number;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
  }>;

  slot0(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: boolean;
  }>;

  "slot0()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: boolean;
  }>;

  callStatic: {
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    "observations(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    slot0(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;

    "slot0()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;
  };

  filters: {};

  estimateGas: {
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observations(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slot0(overrides?: CallOverrides): Promise<BigNumber>;

    "slot0()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidity()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observations(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "slot0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
