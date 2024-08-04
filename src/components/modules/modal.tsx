
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../ui/dialog"
import { FC} from "react";

export const Modal: FC<{
    children: React.ReactNode,
    img: string
}> = ({ children, img }) =>
{
    return (
        <Dialog modal>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
                <DialogContent>
                <DialogClose />
                <img src={img}></img>
                </DialogContent>
        </Dialog>
    )
}