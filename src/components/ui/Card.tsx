import type { NextPage } from 'next'

const Card: NextPage<{ photo: string , title:string , pr:string}> = ({ photo , title , pr }) => {
    const usePhoto= photo;
    const useTitle= title;
    const usePr= pr;
    return (
        <div className="w-9/12 my-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 md:flex-row md:max-w-xl md:h-60">
            <img className="object-cover w-full rounded-t-lg h-56 md:h-full md:w-48 md:rounded-none md:rounded-s-lg md:aspect-square" src={photo} alt=""/>
            <div className="flex flex-col justify-between p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{pr}</p>
            </div>
        </div>
    );
};

export { Card };