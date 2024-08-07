
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../ui/dialog"
import { FC} from "react";

export const Modal: FC<{
    children: React.ReactNode,
}> = ({ children }) =>
{
    return (
        <Dialog modal>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
                <DialogContent>
                <DialogClose />
                </DialogContent>
        </Dialog>
    )
}