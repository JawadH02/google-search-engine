import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start || 0);
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <a className="chevronLinks">
            <div className="flex flex-col items-center">
              <ChevronLeftIcon className="h-5" />
              <p>Previous</p>
            </div>
          </a>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <a className="chevronLinks">
          <div className="flex flex-col items-center">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
