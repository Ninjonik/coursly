import {AnimatePresence} from "framer-motion";

export default function LocationProvider({ children }: {children: React.ReactNode}) {
    return <AnimatePresence>{children}</AnimatePresence>;
}
