import type { NextPage } from 'next'

const Card: NextPage<{ photo: string , title:string , pr:string}> = ({ photo , title , pr }) => {
    const usePhoto= photo;
    const useTitle= title;
    const useCatch= pr;
    return (
        <div className="m-8">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={usePhoto} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{useTitle}</h2>
                    <p>{useCatch}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;