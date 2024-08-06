 
import Providers from "../redux/Provider"
import MainLayout from "./components/MainLayout"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>
  <Providers>

  <MainLayout>

  {children}
  </MainLayout>
  </Providers>

  </>
}




/*
import React from 'react';
import MainLayout from '../components/MainLayout';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const childArray = React.Children.toArray(children);

  // Проверка наличия Layout на уровне дочерних элементов
  const hasCustomLayout = childArray.some(
    (child: any) => React.isValidElement(child) && child.type && child.type.Layout
  );

  if (hasCustomLayout) {
    // Если есть кастомная обертка, рендерим дочерние элементы без MainLayout
    return <>{children}</>;
  }

  // Если кастомная обертка отсутствует, используем MainLayout
  return <MainLayout>{children}</MainLayout>;
};

export default ClientLayout;
*/


/*
'use client'
import React from 'react';
import MainLayout from '../components/MainLayout';
 

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  // Проверяем, есть ли у дочерних элементов обертка
  const hasLayout = React.Children.toArray(children).some((child: any) => child.props && child.props.Layout);
console.log("IS", hasLayout)
  if (hasLayout) {
    return <>{children}
    
    ewfewf

    wef
    wfe
    wef
    wef
    wef
    few

    </>;
  }

  return <MainLayout>{children}</MainLayout>;
};

export default ClientLayout;

*/

/*
import React from 'react';
import MainLayout from '../components/MainLayout';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
*/

/*
import MainLayout from "../components/MainLayout"
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>
  <MainLayout>

  {children}
  </MainLayout>
  </>
}
*/