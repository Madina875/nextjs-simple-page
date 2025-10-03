import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function ProductPage() {
  const data = await getProducts();

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        {data?.map((e: any) => (
          <div
            key={e.id}
            className="flex flex-col items-center p-2 bg-white rounded-2xl"
          >
            <Link
              href={`/product/${e.id}`}
              className="group relative w-[280px] h-[280px] overflow-hidden rounded-t-2xl shadow-sm cursor-pointer"
            >
              <Image
                src={e.image}
                alt={e.title}
                width={240}
                height={240}
                sizes="280px"
                className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </Link>

            <div className="mt-4 w-full rounded-b-2xl bg-white p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <strong className="italic text-[20px] text-gray-800">
                {e.price}$
              </strong>
              <p className="line-clamp-2 mt-2 text-sm text-gray-600 leading-snug">
                {e.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
