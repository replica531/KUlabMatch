// 参照: https://qiita.com/fizumi6/items/d51625adc2a3ab7ac994

import React from "react";

type Component = React.ComponentType<{ children: React.ReactNode }>; // children のみを prop として持つコンポーネント
type AtLeast2 = [Component, Component, ...Component[]]; // 型で引数の数を２つ以上に限定

// コンポーネント用部分適用関数
export const partial = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
): Component =>
  function Partial({ children }) {
    return React.createElement(Component, props, [children]);
  };

// コンポーネント用合成関数
export const pipeComponents = (...components: AtLeast2): Component => {
  return components.reduce((Acc, Cur) => {
    return function PipeComponent({ children }) {
      return (
        <Acc>
          <Cur>{children}</Cur>
        </Acc>
      );
    };
  });
};
