import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-12 text-white flex-col h-[45vh]">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">
          Buy Me a Coffee!
          <span>
            <Image
              src="/assets/coffee.gif"
              alt="coffee gif"
              height={70}
              width={70}
              unoptimized={true}
            />
          </span>
        </div>
        <p className="text-lg">
          A crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Now!
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto">
        <h2 className="text-2xl font-bold text-center my-10">
          Your fans can buy you a Coffee!
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center w-1/3">
            <Image
              className="rounded-3xl  p-2"
              src="/assets/work.gif"
              alt="coffee gif"
              height={70}
              width={70}
              unoptimized={true}
            />
            <p className="font-bold ">Be a Creator!</p>
            <p className="text-center">Publish your best work!</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center w-1/3">
            <Image
              className="rounded-3xl  p-2"
              src="/assets/coin.gif"
              alt="coin gif"
              height={70}
              width={70}
              unoptimized={true}
            />
            <p className="font-bold ">Fund your creative work!</p>
            <p className="text-center">
              Earn money for your creative work through donations!
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center w-1/3">
            <Image
              className="rounded-3xl  p-2"
              src="/assets/group.gif"
              alt="group gif"
              height={70}
              width={70}
              unoptimized={true}
            />
            <p className="font-bold ">For the true fans!</p>
            <p className="text-center">
              Give your true fans an easy way to say thanks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
