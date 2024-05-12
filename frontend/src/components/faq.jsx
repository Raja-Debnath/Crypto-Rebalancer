import React from "react";
import Button from "@mui/material/Button";
function Faq() {
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            For any questions or concerns, please contact us at{" "}
            <b>
              <a href="https://github.com/Raja-Debnath">Github </a>
            </b>
            and join our{" "}
            <b>
              <a href="https://chat.whatsapp.com/GqknKGvinhL5MCCp4oYI46">
                Pvx Crpto Community{" "}
              </a>
            </b>
          </p>
        </div>
        <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          <div>
            <h2 class="text-xl font-semibold text-black">
              How do I get started?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              To use our Service , make sure you have a Account in any of the
              given Exchanges and have the required balance. then add the assets
              to our platform and start trading.
            </p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-black">
              Are there any fees?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              There are no fees for using our platform Until{" "}
              <b> beta mode Ends </b>, you will be charged a commission for each
              trade. The commission is calculated as a percentage of the trade
              amount and is charged to the user who initiates the trade.
              <b>
                Our platform fee will be calculated based on the profit of
                0.005% of the trade amount.
              </b>
            </p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-black">
              What are the Risk Factors?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              1 Market Risk: The risk of losing your capital if the market goes
              down.
              <br />
              2 Liquidity Risk: The risk of not having enough assets to cover
              your trade.
              <br />
              3 Volatility Risk: The risk of the price of an asset fluctuating
              significantly.
              <br />
              4 Information Risk: The risk of not having access to the latest
              information about an asset.
              <br />
              5 Systemic Risk: The risk of the system being affected by external
              factors.
              <br />
              <b>
                {" "}
                Please note that these risks are specific to assets involved ,
                to reduce the risk factor our Algo Trading Feature is under
                Reviews.{" "}
              </b>
            </p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-black">
              How to Contibute to our Project?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              We are always looking for contributors to help us improve our
              platform. If you are interested in contributing to our project,
              please contact us at{" "}
              <b>
                <a href="https://github.com/Raja-Debnath">Github </a>
              </b>
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Button
            onClick={() => {
              window.open(
                " https://chat.whatsapp.com/GqknKGvinhL5MCCp4oYI46",
                "_blank"
              );
            }}
            variant="contained"
          >
            Contact us
          </Button>
        </p>
      </div>
    </section>
  );
}
export default Faq;
