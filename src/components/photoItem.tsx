import { Photo } from "@/types/GaleryPhoto";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div className="cursor-pointer hover:opacity-80" onClick={onClick}>
            <img src={`/images/${photo.url}`} alt='' className="w-full" />
        </div>
    );
}