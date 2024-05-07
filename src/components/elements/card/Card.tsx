import type { NextPage } from 'next'

const Card: NextPage<{ photo: string , title:string , pr:string}> = ({ photo , title , pr }) => {
    const usePhoto= photo;
    const useTitle= title;
    const usePr= pr;
    return (
    <div className="m-8 items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={usePhoto} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{useTitle}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{usePr}</p>
        </div>
    </div>
    );
};

export default Card;