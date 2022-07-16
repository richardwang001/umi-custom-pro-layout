import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { BasicLayoutProps } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from '../config/_defaultProps';

export default () => {
  const [pathname, setPathname] = useState('/welcome');
  const [collapsed, setCollapsed] = useState(false);
  const children = (
    <PageContainer>
      <h1>页面</h1>
    </PageContainer>
  );
  const props: BasicLayoutProps = {
    ...defaultProps,
    location: {
      pathname,
    },
    navTheme: 'dark',
    collapsed,
    title: 'XXXXXX标题XXXXXX',
    fixSiderbar: true,
    fixedHeader:true,
    collapsedButtonRender: false,
    menuItemRender: (item, dom) => (
      <a
        onClick={() => {
          setPathname(item.path || '/welcome');
        }}
      >
        {dom}
      </a>
    ),
  };

  return (
    <ProLayout
      {...props}
      onCollapse={setCollapsed}
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        );
      }}
    >
      {/*后续这里用 <Outlet/>代替*/}
      {children}
    </ProLayout>
  );
};