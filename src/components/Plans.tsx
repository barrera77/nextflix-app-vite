import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CheckIcon } from "@heroicons/react/24/solid";

import { Product } from "@stripe/firestore-stripe-payments";
import { useState } from "react";
import Table from "./Table";

interface Props {
  products: Product[];
}

function Plans({ products }: Props) {
  const { logout } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);

  return (
    <div>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link to={"/Home"}>
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          onClick={logout}
          className="text-lg font-medium hover:underline"
        >
          Sign Out
        </button>
      </header>

      <main className="pt-28">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`planBox ${
                  selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"
                }`}
              >
                {product.name}
              </div>
            ))}
          </div>
          <Table />
        </div>
      </main>
    </div>
  );
}

export default Plans;
