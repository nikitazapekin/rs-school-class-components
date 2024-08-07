import NotFoundComponent from "./NotFound";

interface LayoutProps {
    children: React.ReactNode;
}

const NotLayout = ({ children }: LayoutProps) => {
    return (<>


 {children}
   
<NotFoundComponent />
    </>);
}

export default NotLayout;
 