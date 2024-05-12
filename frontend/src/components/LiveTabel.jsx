import * as React from "react";

function LiveTabel() {
   return (
    <div className="flex gap-5 justify-between items-end px-5 pt-14 ml-12 max-w-[1204px] max-md:flex-wrap">
      <div className="flex flex-col self-stretch">
        <div className="text-xl font-semibold text-zinc-900">Live Market</div>
        <div className="flex gap-4 mt-9">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339dfe254dc110159f63fae9f3b7cb00e238f757d528b67f501a92d386d2d9e?"
              className="aspect-square w-[50px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99821793065fce98fca6887038406ea247ba65a3b316c50d2b1b7c74635d3e0b?"
              className="mt-8 aspect-square w-[50px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5bcff2a5ac9c8304f0d165a2a90539134091a4e71ee507f4fd93005816a17ef?"
              className="mt-8 aspect-square w-[50px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9fee1ff433489431f2ec5de1d33c203d0726a0e03a6e9224042c8266f5bfec?"
              className="mt-8 aspect-square w-[50px]"
            />
          </div>
          <div className="flex flex-col my-auto text-base font-semibold text-zinc-900">
            <div>Ethereum</div>
            <div className="mt-3.5 text-sm tracking-wide text-neutral-400">
              ETH / USDT
            </div>
            <div className="mt-11 max-md:mt-10">Bitcoin</div>
            <div className="mt-3.5 text-sm tracking-wide text-neutral-400">
              ETH / USDT
            </div>
            <div className="mt-11 max-md:mt-10">Litecoin</div>
            <div className="mt-3.5 text-sm tracking-wide text-neutral-400">
              ITC / USDT
            </div>
            <div className="mt-11 max-md:mt-10">Cardano</div>
            <div className="mt-3.5 text-sm tracking-wide text-neutral-400">
              ADA / USDT
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-14 text-xs whitespace-nowrap text-neutral-400 max-md:mt-10">
        <div className="tracking-wide">Change</div>
        <div className="mt-5 text-sm font-medium leading-6 text-green-500">
          +14.02%
        </div>
        <div className="mt-11 tracking-wide max-md:mt-10">Change</div>
        <div className="mt-5 text-sm font-medium leading-6 text-green-500">
          +4.02%
        </div>
        <div className="mt-11 tracking-wide max-md:mt-10">Change</div>
        <div className="mt-5 text-sm font-medium leading-6 text-orange-400">
          -4.02%
        </div>
        <div className="mt-11 tracking-wide max-md:mt-10">Change</div>
        <div className="mt-5 text-sm font-medium leading-6 text-green-500">
          +0.02%
        </div>
      </div>
      <div className="flex flex-col mt-14 text-xs tracking-wide text-neutral-400 max-md:mt-10">
        <div>Price</div>
        <div className="mt-5 text-sm font-semibold tracking-wide text-zinc-900">
          39,786 USD
        </div>
        <div className="mt-10 max-md:mt-10">Price</div>
        <div className="mt-5 text-sm font-semibold tracking-wide text-zinc-900">
          21,786 USD
        </div>
        <div className="mt-10 max-md:mt-10">Price</div>
        <div className="mt-5 text-sm font-semibold tracking-wide text-zinc-900">
          9,786 USD
        </div>
        <div className="mt-10 max-md:mt-10">Price</div>
        <div className="mt-5 text-sm font-semibold tracking-wide text-zinc-900">
          4,786 USD
        </div>
      </div>
      <div className="flex flex-col items-center mt-14 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/484a1505ef0775645a882a354b96a19caaf94e0b022fdaf40847b5c7b888180b?"
          className="aspect-[4] w-[162px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9313e3c9bf0c50f9dfbac592cac03b35652b52b720112033ce61205983c902?"
          className="mt-11 aspect-[4] w-[162px] max-md:mt-10"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d58fbb1b6c3a8c2e4ad104387c511d16133b39dfbb550a0c9e8aca2ecd87500c?"
          className="mt-11 aspect-[4] w-[162px] max-md:mt-10"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5943c1ac1f13a116c7629e83ca55578d37701cad2da8be6e948454adb3c5f534?"
          className="mt-11 aspect-[4] w-[162px] max-md:mt-10"
        />
      </div>
    </div>
  );
}


export default LiveTabel;