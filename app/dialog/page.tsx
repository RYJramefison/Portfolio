import { Button } from "@/components/ui/button";
import { Dialog,DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import {  } from "@radix-ui/react-dialog";

export default function DialogPage(){
    return <div className="h-screen w-screen flex items-center justify-center">
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                Open dialog
                </Button>
                </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>title</DialogTitle>
                </DialogHeader>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum repudiandae eveniet excepturi velit obcaecati facilis illo adipisci provident, voluptates molestiae, laborum optio? Reprehenderit alias hic labore autem sed animi?</p>
                <DialogFooter>
                <Button variant={"destructive"}>Delete</Button>
                <Button variant={"outline"}>Cancel</Button>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
}