import React from 'react';

type IconProps = {
  name: string;
  size?: number|string;
  color?: string;
};

export default function Icon({ name, size, color }: IconProps) {
  return (
    <i className={`icon icon-${name}`}
      style={{ fontSize: size, color: color }}
    ></i>
  );
}
