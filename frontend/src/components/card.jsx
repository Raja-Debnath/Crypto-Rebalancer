import React from 'react'

function CardOne() {
    const data =3000
  return (
    <div className="mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-7 mx-auto w-full whitespace-nowrap rounded-3xl shadow-lg bg-zinc-950 max-md:mt-3.5">
            <div className="flex gap-5 justify-between w-full text-white">
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e06a0314528a17e5e3e98d587aac1b3cf705dc3de815dacd5d49a45ad310ceb?"
                  className="shrink-0 aspect-[1.04] w-[46px]"
                />
                <div className="flex flex-col self-start mt-1.5">
                  <div className="text-base font-semibold">Bitcoin</div>
                  <div className="mt-4 text-xs">BTC</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b2d3774155ab6c15598a73a85f02583bc5cb0f0edd79c02b529d62d3e1a8841?"
                className="shrink-0 self-start w-11 aspect-[1.02] fill-teal-400"
              />
            </div>
            <div className="flex gap-5 items-start mt-7">
              <div className="flex flex-col">
                <div className="text-2xl font-medium tracking-wide text-neutral-200">
                  $52,291
                </div>
                <div className="mt-6 text-sm font-semibold tracking-wide leading-6 text-teal-400">
                  +0.25%
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b83961f11cd3099f56fc2e9ea39044362d1b023e52cf94b36f02606422b5df8?"
                className="shrink-0 mt-2 max-w-full aspect-[2.17] w-[115px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-7 mx-auto w-full whitespace-nowrap rounded-3xl shadow-lg bg-zinc-950 max-md:mt-3.5">
            <div className="flex gap-5 justify-between w-full text-white">
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fdb82636b200eb4fb2bd2122de588d4a02fdda53dab8615938b822f25e3f671?"
                  className="shrink-0 aspect-[1.04] w-[46px]"
                />
                <div className="flex flex-col self-start mt-1.5">
                  <div className="text-base font-semibold">Litecoin</div>
                  <div className="mt-4 text-xs">ITC</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/284f41ade2175db34728f4875905f57a26e6388ea58ccb6bc3bbeaff3eb09d61?"
                className="shrink-0 self-start w-11 aspect-[1.02] fill-teal-400"
              />
            </div>
            <div className="flex gap-5 justify-between items-start mt-7">
              <div className="flex flex-col">
                <div className="text-2xl font-medium tracking-wide text-neutral-200">
                  $8,291
                </div>
                <div className="mt-6 text-sm font-semibold tracking-wide leading-6 text-teal-400">
                  +0.25%
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 mt-2 max-w-full aspect-[2.17] fill-[linear-gradient(180deg,rgba(183,183,183,0.31)_0%,rgba(130,130,130,0.00)_109.62%)] w-[114px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-7 mx-auto w-full whitespace-nowrap rounded-3xl shadow-lg bg-zinc-950 max-md:mt-3.5">
            <div className="flex gap-5 justify-between text-white">
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/710cb4cae0c761c8cecbd8cb2e69f68ff82cd1c238c1c53fcd09a65e0faa0d5b?"
                  className="shrink-0 aspect-[1.04] w-[46px]"
                />
                <div className="flex flex-col self-start mt-1.5">
                  <div className="text-base font-semibold">Ethereum</div>
                  <div className="mt-4 text-xs">ETH</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab86d0c77a380a0fe240ac75ab1eedf601f3a2ae0454281a1f9066f38d6994a3?"
                className="shrink-0 self-start aspect-[1.04] fill-teal-400 w-[45px]"
              />
            </div>
            <div className="flex gap-5 items-start mt-7">
              <div className="flex flex-col flex-1">
                <div className="text-2xl font-medium tracking-wide text-neutral-200">
                  $28,291
                </div>
                <div className="mt-6 text-sm font-semibold tracking-wide leading-6 text-teal-400">
                  +0.25%
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 mt-2 max-w-full aspect-[2.22] fill-[linear-gradient(180deg,rgba(48,106,255,0.40)_0%,rgba(48,106,255,0.00)_109.62%)] w-[115px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-7 mx-auto w-full whitespace-nowrap rounded-3xl shadow-lg bg-zinc-950 max-md:mt-3.5">
            <div className="flex gap-5 justify-between w-full text-white">
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2d84d1df40d3ebf83945f56da585024d847c9107e094b355dc1ded4135e869?"
                  className="shrink-0 aspect-[1.04] w-[46px]"
                />
                <div className="flex flex-col self-start mt-1.5">
                  <div className="text-base font-semibold">Solana</div>
                  <div className="mt-4 text-xs">SOL</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd059cb09d3a74f68bce61cc614743fbdc5ed1f08b128a713918dad66e58e69?"
                className="shrink-0 self-start aspect-[1.04] fill-orange-500 w-[45px]"
              />
            </div>
            <div className="flex gap-5 justify-between items-start mt-7">
              <div className="flex flex-col">
                <div className="text-2xl font-medium tracking-wide text-neutral-200">
                  $14,291
                </div>
                <div className="mt-6 text-sm font-semibold tracking-wide leading-6 text-orange-500">
                  -0.25%
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 mt-2 max-w-full aspect-[2.22] fill-[linear-gradient(180deg,rgba(30,203,110,0.33)_0%,rgba(30,203,110,0.00)_109.62%)] w-[115px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardOne
