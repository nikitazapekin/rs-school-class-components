import NotFoundComponent from "./NotFound";

interface LayoutProps {
    children: React.ReactNode;
}

const NotLayout = ({ children }: LayoutProps) => {
    return (<>


 {children}
   
<NotFoundComponent />


wrapper
	<div style={{height: "400px", width: "400px", backgroundColor: "red"}}>dds</div>
    </>);
}

export default NotLayout;
 